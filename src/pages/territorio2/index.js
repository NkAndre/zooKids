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
    {foto: require('../../../assets/arara-azul-grande.jpg'),
    nome: 'Arara Azul Grande',
    desc: 'A arara-azul-grande possui 1,5 quilo e 1 metro de comprimento adulto, habita florestas tropicais e regiões de cerrado do Brasil, especialmente no Pantanal e na Amazônia.',
    icon1:require('../../../assets/americaSul.png'),
    dieta:' Frugívora	🥥🥜',
    },
    {foto: require('../../../assets/caracol-da-mata-atlantica.jpg'),
    nome: 'Caracol da Mata Atlântica',
    desc: 'O caracol-da-mata-atlântica possui 20 gramas e 5 centímetros de comprimento adulto, habita regiões úmidas e sombreadas da Mata Atlântica.',
    icon1:require('../../../assets/americaSul.png'),
    dieta:' Herbívora	🥬🍄',
    },
    {foto: require('../../../assets/formiga-sauva.jpg'),
    nome: 'Formiga Saúva',
    desc:'A formiga-saúva possui entre 10 miligramas e 1 grama e mede de 0,5 a 3 centímetros, habita florestas, campos e áreas rurais de toda a América do Sul.',
    icon1:require('../../../assets/americaSul.png'),
    dieta:' Fungívora	🍄🍃',
    },
    {foto: require('../../../assets/mico-leao-dourado.jpg'),
    nome: 'Mico Leão Dourado',
    desc:'O mico-leão-dourado possui 700 gramas e 30 centímetros de corpo e 40 de cauda adulto, habita a Floresta Atlântica do Rio de Janeiro.',
    icon1:require('../../../assets/americaSul.png'),
    dieta:'Onívora🍎🐛🥚',
    },
    {foto: require('../../../assets/papagaio-chaua.jpg'),
    nome: 'Papaguaio Chauá',
    desc:'O papagaio-chauá possui 350 gramas e 35 centímetros adulto, habita florestas úmidas do sul e sudeste do Brasil, tem dieta frugívora.',
     icon1:require('../../../assets/americaSul.png'),
    dieta:' Frugívora	🍒🌻',
    },
    {foto: require('../../../assets/piton-burmesa.jpg'),
    nome: 'Piton Burmesa',
    desc:'A píton-burmesa pode pesar até 90 quilos e medir 5 metros de comprimento adulta.E uma curiosidade é que pode engolir presas maiores que a própria cabeça devido à mandíbula elástica.',
    icon1:require('../../../assets/asia.png'),
    dieta :'Carnívora	🥩🐦', 
    },
    {foto: require('../../../assets/sapo-ponta-de-flecha.jpg'),
    nome: 'Sapo Ponta de Flecha',
    desc:'O sapo-ponta-de-flecha possui 30 gramas e 4 centímetros adulto, habita florestas úmidas da América Central e do Sul, tem dieta carnívora',
    icon1:require ('../../../assets/americas.png'),
    dieta:'Carnívora	🕷️🐜',
    },
    {foto: require('../../../assets/suindara.jpg'),
    nome: 'Suindara',
    desc:'A suindara (coruja-das-torres) possui 500 gramas e 35 centímetros de altura adulto,e uma curiosidade é que é uma das corujas mais adaptadas à convivência humana.',
    icon1:require ('../../../assets/americas.png'),
    dieta:'Carnívora🐭🐦',
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
          <Image style={styles.image} source={require('../../../assets/arara-azul-grande.jpg')}/>
          <Text style={styles.texto}>Arara Azul Grande</Text>
          </Animatable.View>
        </Pressable>


        <Pressable style={styles.pressable} onPress={abrirModal1}>
        <Animatable.View animation={"bounceInRight"} delay="500">
          <Image style={styles.image} source={require('../../../assets/caracol-da-mata-atlantica.jpg')}/>
          <Text style={styles.texto}>Caracol da Mata Atlântica</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal2}>
        <Animatable.View animation={"bounceInLeft"} delay="750">
          <Image style={styles.image} source={require('../../../assets/formiga-sauva.jpg')}/>
          <Text style={styles.texto}>Formiga Saúva</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal3}>
        <Animatable.View animation={"bounceInRight"} delay="1000">
          <Image style={styles.image} source={require('../../../assets/mico-leao-dourado.jpg')}/>
          <Text style={styles.texto}>Mico Leão Dourado</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal4}>
        <Animatable.View animation={"bounceInLeft"} delay="1250">
          <Image style={styles.image} source={require('../../../assets/papagaio-chaua.jpg')}/>
          <Text style={styles.texto}>Papagaio Chauá</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal5}>
        <Animatable.View animation={"bounceInRight"} delay="1400">
          <Image style={styles.image} source={require('../../../assets/piton-burmesa.jpg')}/>
          </Animatable.View>
          <Text style={styles.texto}>Piton Burmesa</Text>
          
          
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal6}>
        <Animatable.View animation={"bounceInLeft"} delay="1650">
          <Image style={styles.image} source={require('../../../assets/sapo-ponta-de-flecha.jpg')}/>
          <Text style={styles.texto}>sapo Ponta de flecha</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={abrirModal7}>
        <Animatable.View animation={"bounceInRight"} delay="1900">
          <Image style={styles.image} source={require('../../../assets/suindara.jpg')}/>
          <Text style={styles.texto}>Suindara</Text>
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
                  <Image source={require('../../../assets/iconeX.png')}style={styles.iconeFechar}/>
                 </Pressable>
                </View>
              </View>
      </Modal>

      <StatusBar style="auto" />
    </View>
  );
}