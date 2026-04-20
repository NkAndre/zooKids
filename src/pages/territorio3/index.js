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
    {foto: require('../../../assets/cachorro-do-mato.jpg'),
    nome: 'Cachorro do Mato ',
    desc:'O cachorro-do-mato possui 6 quilos e 60 centímetros de comprimento adulto, habita florestas, cerrados e campos do Brasil e da América do Sul.',
    icon1:require('../../../assets/americaSul.png'),
    dieta:'Onívora 🍎Fruta + Carne🥩'
    },
    {foto: require('../../../assets/raposinha-do-campo.jpg'),
    nome: 'Raposinha do Campo',
    desc:'A raposinha-do-campo possui 3,5 quilos e 60 centímetros de comprimento adulto, habita campos abertos e cerrados do Brasil e da Bolívia, tem dieta onívora.',
    icon1:require('../../../assets/americaSul.png'),
    dieta:'Onívora 🍎Fruta Carne🥩'
    },
    {foto: require('../../../assets/salamandra-mexicana.jpg'),
    nome: 'Salamandra Mexicana',
    desc:'A salamandra-mexicana (axolote) possui 250 gramas e 25 centímetros adulto, e uma curiosidade é que pode regenerar partes do corpo, como membros e até partes do cérebro.',
    icon1:require('../../../assets/norte.png'),
    dieta:'Carnívora🥩 Carne/Peixe 🐟'
    },
    {foto: require('../../../assets/tamandua-bandeira.jpg'),
    nome: 'Tamanduá Bandeira',
    desc:'O tamanduá-bandeira possui 40 quilos e 2 metros de comprimento adulto, habita savanas, cerrados e florestas abertas da América do Sul.',
    icon1:require('../../../assets/americaSul.png'),
    dieta:' Insetívora (Formigas e cupins)	🐜 Inseto'
    },
    {foto: require('../../../assets/urso-de-oculos.webp'),
    nome: 'Urso de Oculos',
    desc:'O urso-de-óculos possui 120 quilos e 1,5 metro de comprimento adulto, habita na da América do Sul e uma curiosidade é que recebe esse nome por causa das manchas claras ao redor dos olhos que lembram óculos.',
     icon1:require('../../../assets/americaSul.png'),
      dieta:' Onívora🍎 Fruta + Carne 🥩'
     
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
  const abrirModal4 = () =>{
    setAnimal(4)
    setModal(true)
  }
  const abrirModal5 = () =>{
    setAnimal(5)
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
              <Image style={styles.image} source={require('../../../assets/cachorro-do-mato.jpg')}/>
              <Text style={styles.texto}>Cachorro do Mato</Text>
                </Animatable.View>
            </Pressable>
    
            <Pressable style={styles.pressable} onPress={abrirModal1}>
               <Animatable.View animation={"bounceInRight"} delay="500">
              <Image style={styles.image} source={require('../../../assets/raposinha-do-campo.jpg')}/>
              <Text style={styles.texto}>Raposinha do Campo</Text>
              </Animatable.View>
            </Pressable>
    
            <Pressable style={styles.pressable} onPress={abrirModal2}>
               <Animatable.View animation={"bounceInLeft"} delay="750">
              <Image style={styles.image} source={require('../../../assets/salamandra-mexicana.jpg')}/>
              <Text style={styles.texto}>Salamandra Mexicana</Text>
               </Animatable.View>   
            </Pressable>
    
            <Pressable style={styles.pressable} onPress={abrirModal3}>
               <Animatable.View animation={"bounceInRight"} delay="1000">
              <Image style={styles.image} source={require('../../../assets/tamandua-bandeira.jpg')}/>
              <Text style={styles.texto}>Tamanduá Bandeira</Text>
              </Animatable.View> 
            </Pressable>
    
            <Pressable style={styles.pressable} onPress={abrirModal4}>
            <Animatable.View animation={"bounceInLeft"} delay="120">
              <Image style={styles.image} source={require('../../../assets/urso-de-oculos.webp')}/>
              <Text style={styles.texto}>Urso de Oculos</Text>
              </Animatable.View> 
            </Pressable>
              <Modal visible={modal} transparent={true} animationType="slide">
                <View style={styles.CenterModal}>
                  <View style={styles.Modal}>
                    <Text style={styles.texto}>{zoologico[animal].nome}</Text>
                          <Image style={styles.image} source={zoologico[animal].foto} />
                          <Text style={styles.text}>Descrição:</Text>
                          <Text style={styles.textoM}>{zoologico[animal].desc}</Text>
                          <Text style={styles.text}>Continente:</Text>
                          <Image style={styles.icon1} source={zoologico[animal].icon1}/>
                          <Text style={styles.text}>Dieta:<Text style={styles.dieta}>{zoologico[animal].dieta}</Text></Text>
                          <Pressable style={styles.Fechar} onPress={fecharModal}>
                          <Image source={require('../../../assets/iconeFechar2.png')}style={styles.iconeFechar}/>
                      </Pressable>
                    </View>
                  </View>
                </Modal>
          </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}