import React, { use, useEffect, useState } from 'react';
import { styles } from './Styles'
import { View, Text, ScrollView} from 'react-native';
import { Button } from '../../components/Button/index'
import { Card } from '../../components/Card/index';
import { getToken, getQuestion } from '../../services/triviaService';
import { useLocation, useNavigate } from 'react-router-dom'

export default function Quiz() {

    const tamButton = 47;
    const raioButton = 20;

    const location = useLocation();
    const navigate = useNavigate();

    const {qtdQuestions, category, difficulty} = location.state;

    const [token, setToken] = useState('');
    const [question, setQuestion] = useState([]);
    const [pontos, setPontos] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function starter() {
            try {
                const response = await getQuestion(token, qtdQuestions, difficulty, category);
                setQuestion(response.data.results);
            } catch (erro) {
                console.error("Ocorreu um erro ao buscar as questões: ", erro);
            }
        }

        starter();
    },[]);



    return(
        <View style={styles.container}>
            <View style={styles.card}>
                <Card title= 'Questão' corCard='#C41E3A'/>
            </View>

            <ScrollView style={styles.questao}>
                <Text style={styles.enunciadoTexto}>
                    
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.
                
                </Text>
            </ScrollView>

            <View style={styles.respostas}>
                <Button title="noruega" height={tamButton} raio={raioButton}/>

                <Button title="italia" height={tamButton} raio={raioButton}/>

                <Button title="amanha" height={tamButton} raio={raioButton}/>

                <Button title="Estados Unidos" height={tamButton} raio={raioButton}/>
            </View>
        </View>
    );
}