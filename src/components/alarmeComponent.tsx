import { Image, Pressable, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/alarmeStyles';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { useEffect, useState } from 'react';
import { ListItem, TextInput } from '@react-native-material/core';
import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import MaskInput from 'react-native-mask-input';

export function AlarmeComponent() {

    const [socketUrl, setSocketUrl] = useState('wss://demo.piesocket.com/v3/channel_1?api_key=VCXCEuvhGcBDP7XhiJJUDvR1e1D3eiVjgZ9VRiaV&notify_self');
    const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl);
    const [levelRacao, setLevelRacao] = useState('Sem dados');
    const [alarmesSaves, setAlarmesSave] = useState([]);
    const [timeAlarme, setTimeAlarme] = useState('');

    const [operation, setOperation] = useState('normal')

    const firebaseConfig = {
        apiKey: "AIzaSyD4Dj5f92uI6l7YMWuN2OdcQeAcT5tSnbM",
        authDomain: "initialprojectesp32.firebaseapp.com",
        databaseURL: "https://initialprojectesp32-default-rtdb.firebaseio.com",
        projectId: "initialprojectesp32",
        storageBucket: "initialprojectesp32.appspot.com",
        messagingSenderId: "1047624085178",
        appId: "1:1047624085178:web:6774035dcd05611245dc83"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);

    async function getAlarmes(db) {
        const docRef = doc(db, "animal-feeder", "alarmes");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            let alarmesFind = []
            docSnap.data().next_alarmes.forEach(element => {
                alarmesFind.push(new Date(element))
            });
            setAlarmesSave(alarmesFind)
            // await updateAlarmes(db, new_data)
        } else {
            console.log("No such document!");
        }
    }

    async function updateAlarmes(new_data){
        const alarmesRef = doc(db, "animal-feeder", "alarmes");
        const docSnap = await getDoc(alarmesRef);

        if (docSnap.exists()) {
            let alarmesFind = []
            docSnap.data().next_alarmes.forEach(element => {
                alarmesFind.push(element)
            });
            alarmesFind.push(new_data)
            await updateDoc(alarmesRef, {
                next_alarmes: alarmesFind
            }).then(
                getAlarmesFunction
            )
        } 
        else {
            await updateDoc(alarmesRef, {
                next_alarmes: new_data
            });
        }
    }

    function formatDateNow(date:string){
        let stringHour = Number(date.substring(0,2));
        let stringMinute = Number(date.substring(3,5));
        let nowDate = new Date();
        nowDate.setHours(stringHour)
        return nowDate.setMinutes(stringMinute)
    }

    const getAlarmesFunction = async () => {
        try {
            await getAlarmes(db)
        }
        catch {
            console.log("Deu errado");
        }
    }

    useEffect(() => {
        getAlarmesFunction().catch(console.error)
    }, [operation])

    function changeOperation(operation) {
        setOperation(operation)
    }

    function clearField(){
        setTimeAlarme('');
    }

    const connectionStatus = {
        [ReadyState.CONNECTING]: 'Connecting',
        [ReadyState.OPEN]: 'Open',
        [ReadyState.CLOSING]: 'Closing',
        [ReadyState.CLOSED]: 'Closed',
        [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
    }[readyState];


    return (
        <View>
            {operation == 'normal' &&
                <View style={styles.contentContainer}>
                    {alarmesSaves.map((item, index) => {
                        return (
                            <TouchableOpacity
                                style={styles.alarmeData}
                                key={index}
                            >
                                <Text>{item.toString()}</Text>
                            </TouchableOpacity>
                        )
                    })}
                    <TouchableOpacity
                        style={styles.buttonAdd}
                        onPress={() => {
                            changeOperation('add')
                        }}
                    >
                        <Text style={styles.textAddButton}>+ Adicionar</Text>
                    </TouchableOpacity>
                </View>
            }
            {operation == 'add' &&
                <View style={styles.contentContainer}>
                    <View style={styles.input}>
                        <MaskInput
                            style={styles.inputText}
                            value={timeAlarme}
                            onChangeText={(masked, unmasked) => {
                                setTimeAlarme(masked);
                            }}
                            mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonAdd}
                        onPress={ () => {
                            if(timeAlarme){
                                updateAlarmes(formatDateNow(timeAlarme)),
                                clearField(),
                                changeOperation('normal')
                            }
                        }}
                    >
                        <Text style={styles.textAddButton}> Salvar </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.buttonCancel}
                        onPress={() => {
                            changeOperation('normal')
                        }}
                    >
                        <Text style={styles.textAddButton}> Cancelar </Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}