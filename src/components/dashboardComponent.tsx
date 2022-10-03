import { Image, Pressable, Text, View } from 'react-native';
import styles from '../styles/dashboardStyles';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useCallback, useEffect, useState } from 'react';
import { Dimensions, TouchableHighlight } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function DashboardComponent() {

  const [socketUrl, setSocketUrl] = useState('wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self');
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
  const [levelRacao, setLevelRacao] = useState('Sem dados');

  useEffect(() => {
    const receiveAsyncStorage = async () => {
      try{
        let value = await AsyncStorage.getItem('levelRacao')
        console.log("Valor no storage",value)
        if(value){
          setLevelRacao(value);
        }
      }
      catch{
        console.log("Deu errado");
      }
    }
    receiveAsyncStorage().catch(console.error)
  }, [])

  useEffect(() => {
    if(lastMessage?.data != 'Hello world!' && lastMessage?.data != null && lastMessage?.data[0] == '{'){
      let messageReceive = String(lastMessage.data).replace("'\'",'');
      if(messageReceive[0] == '{'){
        let messageReceiveJson = JSON.parse(messageReceive); 
        if(messageReceiveJson.nivelRacao){
          setLevelRacao(messageReceiveJson.nivelRacao.toString())
          const saveAsyncStorage = async () => {
            await AsyncStorage.setItem('levelRacao', messageReceiveJson.nivelRacao.toString())
          }
          saveAsyncStorage().catch(console.error)
        }
      }
      console.log(lastMessage); 
    }
  }, [lastMessage]);

  function teste(){
    sendMessage('To enviando uma mensagem diferenteee'), [];
  }

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];


  return (
    <View style={styles.contentContainer}>
      <TouchableHighlight
        style = {styles.button}
        underlayColor = '#ccc'
      >
        <Text style={styles.textButton}>
          {levelRacao}
        </Text>
      </TouchableHighlight>
    </View>
  );
}