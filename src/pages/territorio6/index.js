import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image, ScrollView, Modal } from 'react-native';
import React, { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';


export default function territorio1() {
  const navigation = useNavigation();

  const [animal, setAnimal] = useState (0);
  const [modal, setModal] = useState (false);

  const zoologico = [
    {foto: require('../../../assets/chimpanze.webp'),
    nome: 'Chimpanzé',
    desc: 'O chimpanzé possui 60 quilos e 1,2 metro de altura adulto, habita florestas tropicais e savanas da África Central e uma curiosidade é que é o animal mais próximo geneticamente do ser humano.',
    icon1:require('../../../assets/africa.png'),
    dieta:' Onívora 🍎 Fruta + Carne 🥩',
    },
    {foto: require('../../../assets/macaco-prego.webp'),
    nome: 'Mamaco Prego',
    desc: 'O macaco-prego possui 3 quilos e 40 centímetros adulto, habita na América do Sul, e uma curiosidade é que usa pedras e galhos como ferramentas para quebrar alimentos.',
     icon1:require('../../../assets/americaSul.png'),
     dieta:' Onívora 🍎Fruta e Carne 🥩',
    },
    {foto: require('../../../assets/muriqui-do-sul.jpg'),
    nome: 'Muriqui do Sul',
    desc: 'O muriqui-do-sul possui 12 quilos e 60 centímetros de corpo e 80 de cauda adulto, habita florestas da Mata Atlântica do sudeste do Brasil',
    icon1:require('../../../assets/americaSul.png'),
    dieta:' Frugívora 🍓 Fruta',
    },
  
    
    {foto: require('../../../assets/orangotango.jpg'),
    nome: 'Orangotango',
    desc: 'O orangotango possui 80 quilos e 1,4 metro adulto, habita florestas tropicais de Bornéu e Sumatra, e uma curiosidade é que ele é um dos animais mais inteligentes, capaz de usar ferramentas e aprender observando.',
     icon1:require('../../../assets/asia.png'),
    dieta:' Frugívora 🍓 Fruta',
    },
  ];

  const abrirModal0 = () =>{
    setAnimal(0)
    setModal(true)
  }
  const abrirModal1 = () =>{
    setAnimal(1)
    setModal(true)
  }
  const abrirModal2 = () =>{
    setAnimal(2)
    setModal(true)
  }
  const abrirModal3 = () =>{
    setAnimal(3)
    setModal(true)
  }

  const fecharModal = () =>{
    setModal(false)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Pressable style={styles.pressable} onPress={abrirModal0}>
           <Animatable.View animation={"bounceInLeft"} delay="250">
          <Image style={styles.image} source={require('../../../assets/chimpanze.webp')}/>
          <Text style={styles.texto}>Chimpanze</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal1}>
        <Animatable.View animation={"bounceInRight"} delay="500">
          <Image style={styles.image} source={require('../../../assets/macaco-prego.webp')}/>
          <Text style={styles.texto}>Macaco Prego</Text>
        </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal2}>
        <Animatable.View animation={"bounceInLeft"} delay="750">
          <Image style={styles.image} source={require('../../../assets/muriqui-do-sul.jpg')}/>
          <Text style={styles.texto}>Muriqui do Sul</Text>
        </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal3}>
        <Animatable.View animation={"bounceInRight"} delay="1000">
          <Image style={styles.image} source={require('../../../assets/orangotango.jpg')}/>
          <Text style={styles.texto}>Orangotango</Text>
        </Animatable.View>
        </Pressable>
      </ScrollView>

      <Modal visible={modal} transparent={true} animationType="slide">
        <View style={styles.CenterModal}>
          <View style={styles.Modal}>
            <Text style={styles.texto}>{zoologico[animal].nome}</Text>
            <Image style={styles.image} source={zoologico[animal].foto} />
            <Text style={styles.text}>Descrição:</Text>
            <Text style={styles.textoM}>{zoologico[animal].desc}</Text>
            <Text style={styles.text}>Continente:</Text>
            <Image style={styles.icon1} source={zoologico[animal].icon1} />
            <Text style={styles.text}>Dieta:<Text style={styles.dieta}>{zoologico[animal].dieta}</Text></Text>
            <Pressable style={styles.Fechar} onPress={fecharModal}>
            <Image source={require('../../../assets/iconeX.png')}style={styles.iconeFechar} />
            </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}