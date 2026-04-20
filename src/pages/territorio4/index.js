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
    {foto: require('../../../assets/dromedario.jpg'),
    nome: 'Dromedario',
    desc: 'O dromedário possui 600 quilos e 2 metros de altura adulto, habita desertos e regiões áridas do norte da África e Oriente Médio,e uma curiosidade é que sua corcova armazena gordura, não água.',
    icon1:require('../../../assets/africa2.png'),
    dieta:' Herbívoro	🌿',
    },
    {foto: require('../../../assets/girafa.jpg'),
    nome: 'Girafa',
    desc: 'A girafa possui 1.200 quilos e 5,5 metros de altura adulto, habita savanas e planícies da África, tem dieta herbívora, alimenta-se de folhas e brotos de acácias, e uma curiosidade é que é o animal terrestre mais alto do mundo.',
    icon1:require('../../../assets/africa2.png'),
    dieta:' Herbívoro	🌿',
     

    },
    {foto: require('../../../assets/hipopotamo.jpg'),
    nome: 'Hipopótamo',
    desc: 'O hipopótamo possui 1.500 quilos e 3,5 metros de comprimento adulto, habita rios e lagos da África Subsaariana, tem dieta herbívora, e uma curiosidade é que apesar do tamanho, é excelente nadador e muito ágil na água.',
    icon1:require('../../../assets/africa2.png'),
    dieta:' Herbívoro🌿',
    },
    {foto: require('../../../assets/leao.jpg'),
    nome: 'Leão',
    desc: 'O leão possui 190 quilos o macho adulto e 130 quilos a fêmea adulta, mede 1,2 metro de altura, habita savanas e planícies da África, e uma curiosidade é que é o único felino que vive em grupos organizados.',
     icon1:require('../../../assets/africa2.png'),
    dieta:' Carnívoro	🥩',
    },
    {foto: require('../../../assets/rinoceronte_branco.webp'),
    nome: 'Rinoceronte Branco',
    desc: 'O rinoceronte-branco possui 2.300 quilos e 3,8 metros de comprimento adulto, habita savanas e planícies da África, , vive em pequenos grupos e uma curiosidade é que possui dois chifres feitos de queratina, a mesma substância das unhas humanas.',
    icon1:require('../../../assets/africa2.png'),
    dieta:' Herbívoro	🌿 💧',
   
    },
    {foto: require('../../../assets/suricato.jpg'),
    nome: 'Suricato',
    desc: 'O suricato possui 900 gramas e 30 centímetros adulto, habita desertos e savanas do sul da África, seu estado de conservação é pouco preocupante, e uma curiosidade é que um membro do grupo sempre fica de vigia enquanto os outros caçam.',
     icon1:require('../../../assets/africa2.png'),
      dieta:' Onívoro	🥕',
    },
    {foto: require('../../../assets/tigre-de-bengala.webp'),
    nome: 'Tigre de Bengala',
    desc: 'O tigre-de-bengala possui 220 quilos e 3 metros de comprimento adulto com a cauda, habita florestas tropicais e manguezais da Índia e Bangladesh,e uma curiosidade é que é o maior felino do mundo, capaz de nadar longas distâncias.',
     icon1:require('../../../assets/asia.png'),
      dieta:' Onívoro	🥕',
    },
    {foto: require('../../../assets/zebra.jpg'),
    nome: 'Zebra',
    desc: 'A zebra possui 350 quilos e 1,3 metro de altura adulto, habita planícies e savanas da África, tem dieta herbívora, seu estado de conservação é pouco preocupante, e uma curiosidade é que cada zebra tem um padrão único de listras, como uma impressão digital.',
     icon1:require('../../../assets/africa.png'),
     dieta:' Herbívoro	🌿',
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
  const abrirModal6 = () =>{
    setAnimal(6)
    setModal(true)
  }
  const abrirModal7 = () =>{
    setAnimal(7)
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
          <Image style={styles.image} source={require('../../../assets/dromedario.jpg')}/>
          <Text style={styles.texto}>Dromedario</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal1}>
        <Animatable.View animation={"bounceInRight"} delay="500">
          <Image style={styles.image} source={require('../../../assets/girafa.jpg')}/>
          <Text style={styles.texto}>Girafa</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal2}>
        <Animatable.View animation={"bounceInLeft"} delay="700">
          <Image style={styles.image} source={require('../../../assets/hipopotamo.jpg')}/>
          <Text style={styles.texto}>Hipopótamo</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal3}>
        <Animatable.View animation={"bounceInRight"} delay="950">
          <Image style={styles.image} source={require('../../../assets/leao.jpg')}/>
          <Text style={styles.texto}>Leão</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal4}>
        <Animatable.View animation={"bounceInLeft"} delay="1250">
          <Image style={styles.image} source={require('../../../assets/rinoceronte_branco.webp')}/>
          <Text style={styles.texto}>Rinocenronte Branco</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal5}>
        <Animatable.View animation={"bounceInRight"} delay="1500">
          <Image style={styles.image} source={require('../../../assets/suricato.jpg')}/>
          <Text style={styles.texto}>Suricato</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal6}>
        <Animatable.View animation={"bounceInLeft"} delay="1750">
          <Image style={styles.image} source={require('../../../assets/tigre-de-bengala.webp')}/>
          <Text style={styles.texto}>Tigre de Bengala</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal7}>
        <Animatable.View animation={"bounceInRight"} delay="1900">
        <Image style={styles.image} source={require('../../../assets/zebra.jpg')}/>
        <Text style={styles.texto}>Zebra</Text>
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
              <Image source={require('../../../assets/iconeFechar2.png')}    style={styles.iconeFechar}  />
            </Pressable>
            </View>
        </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}