import { ScrollView, Text, TouchableOpacity, View } from 'react-native';
import styles from '../styles/alarmeStyles';
import { useEffect, useState } from 'react';
import { initializeApp, getApps } from "firebase/app";
import { doc, getDoc, getFirestore, updateDoc } from "firebase/firestore";
import MaskInput from 'react-native-mask-input';

const firebaseConfig = {
    apiKey: "AIzaSyD4Dj5f92uI6l7YMWuN2OdcQeAcT5tSnbM",
    authDomain: "initialprojectesp32.firebaseapp.com",
    databaseURL: "https://initialprojectesp32-default-rtdb.firebaseio.com",
    projectId: "initialprojectesp32",
    storageBucket: "initialprojectesp32.appspot.com",
    messagingSenderId: "1047624085178",
    appId: "1:1047624085178:web:6774035dcd05611245dc83"
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];
const db = getFirestore(app);

export function AlarmeComponent() {

    const [alarmesSaves, setAlarmesSave] = useState<Date[]>([]);
    const [timeAlarme, setTimeAlarme] = useState('');

    const [operation, setOperation] = useState('normal')

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

    function formatDateNow(date: string) {
        const stringHour = Number(date.substring(0, 2));
        const stringMinute = Number(date.substring(3, 5));
        const nowDate = new Date();
        nowDate.setHours(stringHour);
        nowDate.setMinutes(stringMinute);
        return nowDate.setSeconds(0);
    }

    function formatTime(date: Date): string {
        const h = date.getHours().toString().padStart(2, '0');
        const m = date.getMinutes().toString().padStart(2, '0');
        return `${h}:${m}`;
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

    function clearField() {
        setTimeAlarme('');
    }


    return (
        <View style={{ flex: 1 }}>
            {operation === 'normal' && (
                <ScrollView
                    style={styles.contentContainer}
                    contentContainerStyle={styles.listContent}
                    showsVerticalScrollIndicator={false}
                >
                    {alarmesSaves.length === 0 && (
                        <Text style={styles.emptyText}>Nenhum alarme cadastrado</Text>
                    )}
                    {alarmesSaves.map((item, index) => (
                        <TouchableOpacity style={styles.alarmeData} key={index}>
                            <Text style={styles.alarmTimeText}>{formatTime(item)}</Text>
                            <Text style={styles.alarmIcon}>🔔</Text>
                        </TouchableOpacity>
                    ))}
                    <TouchableOpacity
                        style={styles.buttonAdd}
                        onPress={() => changeOperation('add')}
                    >
                        <Text style={styles.textAddButton}>+ Adicionar Alarme</Text>
                    </TouchableOpacity>
                </ScrollView>
            )}
            {operation === 'add' && (
                <ScrollView
                    style={styles.contentContainer}
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.formCard}>
                        <Text style={styles.formLabel}>Horário do alarme</Text>
                        <View style={styles.input}>
                            <MaskInput
                                style={styles.inputText}
                                value={timeAlarme}
                                onChangeText={(masked) => setTimeAlarme(masked)}
                                mask={[/\d/, /\d/, ':', /\d/, /\d/]}
                                placeholder="00:00"
                                keyboardType="numeric"
                            />
                        </View>
                        <TouchableOpacity
                            style={styles.buttonAdd}
                            onPress={() => {
                                if (timeAlarme) {
                                    updateAlarmes(formatDateNow(timeAlarme));
                                    clearField();
                                    changeOperation('normal');
                                }
                            }}
                        >
                            <Text style={styles.textAddButton}>Salvar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.buttonCancel}
                            onPress={() => changeOperation('normal')}
                        >
                            <Text style={styles.textCancelButton}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            )}
        </View>
    );
}