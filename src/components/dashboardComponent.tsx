import { Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/dashboardStyles';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useEffect, useState } from 'react';
import * as storage from '../utils/storage';

export function DashboardComponent() {
  const [socketUrl] = useState('wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self');
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const [levelRacao, setLevelRacao] = useState('--');

  useEffect(() => {
    (async () => {
      try {
        const value = await storage.getItem('levelRacao');
        if (value) setLevelRacao(value);
      } catch {}
    })();
  }, []);

  useEffect(() => {
    if (lastMessage?.data && lastMessage.data !== 'Hello world!' && lastMessage.data[0] === '{') {
      try {
        const msg = JSON.parse(String(lastMessage.data));
        if (msg.nivelRacao >= 0) {
          const val = msg.nivelRacao.toString();
          setLevelRacao(val);
          storage.setItem('levelRacao', val).catch(console.error);
        }
      } catch {}
    }
  }, [lastMessage]);

  const isConnected = readyState === ReadyState.OPEN;

  return (
    <View style={styles.contentContainer}>
      <View style={styles.card}>
        <Text style={styles.levelLabel}>Nível de Ração</Text>
        <View style={styles.levelCircle}>
          <Text style={styles.levelValue}>{levelRacao}</Text>
          <Text style={styles.levelUnit}>unidades</Text>
        </View>
      </View>
      <View style={[styles.statusBadge, !isConnected && styles.statusBadgeOff]}>
        <Text style={[styles.statusText, !isConnected && styles.statusTextOff]}>
          {isConnected ? '● Conectado' : '○ Desconectado'}
        </Text>
      </View>
      <TouchableOpacity
        style={styles.buttonDumpFeed}
        onPress={() => sendMessage('180')}
      >
        <Text style={styles.textButtonDumpFeed}>Despejar Alimento</Text>
      </TouchableOpacity>
    </View>
  );
}