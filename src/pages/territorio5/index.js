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
    {foto: require('../../../assets/aguia-cinzenta.jpg'),
    nome: 'Águia Cinzenta',
    desc: 'A águia-cinzenta possui 4 quilos e 70 centímetros de altura, com até 2 metros de envergadura, habita montanhas e regiões abertas da América do Sul, tem dieta carnívora, e uma curiosidade é que é uma das maiores aves de rapina da América do Sul.',
    icon1:require ('../../../assets/americaSul.png'),
    dieta:'Carnívora 🥩'

    },
    {foto: require('../../../assets/condor.jpg'),
    nome: 'Condor',
    desc: 'O condor possui 12 quilos e 1,2 metro de altura, com até 3 metros de envergadura, habita a Cordilheira dos Andes e regiões costeiras do Chile e Peru , e uma curiosidade é que é a maior ave voadora do mundo em envergadura.',
     icon1:require ('../../../assets/americaSul.png'),
    dieta:'Necrófaga 💀'
    },
    {foto: require('../../../assets/gaviao-de-penacho.webp'),
    nome: 'Gavião de Penacho',
    desc: 'O gavião-de-penacho possui 1,5 quilo e 70 centímetros de altura adulto, habita florestas tropicais da América Central e do Sul, ameaçado, e uma curiosidade é que ergue o “penacho” da cabeça quando está alerta.',
     icon1:require ('../../../assets/americaSul.png'),
    dieta:'Carnívora 🥩'
    },
    {foto: require('../../../assets/harpia.webp'),
    nome: 'Harpia',
    desc: 'A harpia possui 9 quilos e 1 metro de altura com 2 metros de envergadura, habita florestas tropicais da América Central e Amazônia, e uma curiosidade é que é a ave de rapina mais poderosa das Américas.',
    icon1:require ('../../../assets/americas.png'),
    dieta:'Carnívora 🥩'
    },
    {foto: require('../../../assets/urubu-rei-2.jpg'),
    nome: 'Urubu Rei',
    desc: 'O urubu-rei possui 3,5 quilos e 80 centímetros adulto, habita florestas tropicais e savanas da América Central e do Sul, tem dieta necrófaga, e uma curiosidade é que sua coloração viva na cabeça serve para intimidar outros urubus.',
     icon1:require ('../../../assets/americas.png'),
    dieta:'Necrófaga 💀'
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

  const fecharModal = () =>{
    setModal(false)
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>

        <Pressable style={styles.pressable} onPress={abrirModal0}>
          <Animatable.View animation={"bounceInLeft"} delay="250">
          <Image style={styles.image} source={require('../../../assets/aguia-cinzenta.jpg')}/>
          <Text style={styles.texto}>Aguia Cinzenta</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal1}>
        <Animatable.View animation={"bounceInRight"} delay="500">
          <Image style={styles.image} source={require('../../../assets/condor.jpg')}/>
          <Text style={styles.texto}>Condor</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal2}>
        <Animatable.View animation={"bounceInLeft"} delay="750">
          <Image style={styles.image} source={require('../../../assets/gaviao-de-penacho.webp')}/>
          <Text style={styles.texto}>Gavião de Penacho</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal3}>
        <Animatable.View animation={"bounceInRight"} delay="1000">
          <Image style={styles.image} source={require('../../../assets/harpia.webp')}/>
          <Text style={styles.texto}>Harpia</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal4}>
        <Animatable.View animation={"bounceInLeft"} delay="1250">
          <Image style={styles.image} source={require('../../../assets/urubu-rei-2.jpg')}/>
          <Text style={styles.texto}>Urubu Rei</Text>
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
                              <Image source={require('../../../assets/iconeX.png')}    style={styles.iconeFechar}  />
                             </Pressable>
          </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}