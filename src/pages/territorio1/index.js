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
      {foto: require('../../../assets/cagado-de-barbicha.jpg'),
      nome: 'Cagado de Barbicha',
      desc: 'O cagado-de-barbicha Possui 3 quilos e 35 centímetros de comprimento adulto, habita rios e lagos de água doce do nordeste Brasileiro.',
      icon1:require('../../../assets/americaSul.png'),
      dieta:" Onívoro 🌿🥩",

      },
      {foto: require('../../../assets/elefante-asiatico.jpg'),
      nome: 'Elefante Asiático',
      desc: 'O elefante-asiático possui cerca de quatro toneladas quando adulto no caso dos machos e 1,7 tonelada nas fêmeas. Mede aproximadamente 2,7 metros de altura os machos e 2,4 metros as fêmeas. Habita florestas.',
      icon1:require('../../../assets/asia.png'),
      dieta: "Herbívoro🌿",

      },
      {foto: require('../../../assets/flamingo.jpg'),
      nome: 'Flamingo',
      desc: 'O flamingo adulto pesa cerca de 3,5 quilos e atinge 1,5 metro de altura. Sua maior concentração é na africa Tem dieta onívora, alimentando-se de algas, crustáceos, larvas e moluscolos.',
      icon1:require('../../../assets/africa.png'),
      dieta:" Onívoro 🦐",

      },
      {foto: require('../../../assets/gato-do-mato.jpg'),
      nome: 'Gato do Mato',
      desc: 'O gato-do-mato pesa cerca de 2,2 quilos e mede aproximadamente 45 centímetros quando adulto. Vive nas florestas brasileiras de vegetação densa e ele consegue imitar o som de outros animais para caçá-los.',
      icon1:require('../../../assets/americaSul.png'),
      dieta:" Onívoro 🌿🥩",
      },

      {foto: require('../../../assets/irara.jpg'),
      nome: 'Irara',
      desc: 'A irara adulta pesa cerca de 11 quilos e mede 71 centímetros. Habita florestas densas do Brasil, Argentina e México',
      icon1:require('../../../assets/americas.png'),
      dieta:' Onívoro 🍎🐛 🥚'
      },

      {foto: require('../../../assets/jacaré-açu.jpg'),
      nome: 'Jacaré Açu',
      desc: 'O jacaré-açu pode pesar até 400 quilos e medir cerca de 4,5 metros de comprimento. Vive em lagos e rios da América do Sul.',
      icon1:require ('../../../assets/americaSul.png'),
      dieta: 'Carnívora🥩🐟🐢',
      },

      {foto: require('../../../assets/lobo-guará.jpg'),
      nome: 'Lobo Guará',
      desc: 'O lobo-guará pesa cerca de 30 quilos e atinge 90 centímetros de altura. Habita savanas e cerrados do Brasil, Paraguai, Argentina e Bolívia.',
      icon1:require ('../../../assets/americaSul.png'),
      dieta:' Onívoro🌿🥩',
      
      },

      {foto: require('../../../assets/onça-parda.jpg'),
      nome: 'Onça Parda',
      desc: 'A onça-parda pesa cerca de 103 quilos e mede 1,68 metro de comprimento. E destaca-se por ser o felino selvagem com maior distribuição nas Américas, do Canadá ao Chile.',
      icon1:require ('../../../assets/americas.png'),
      dieta:'Carnívora	🦌🥩',
      
      },
      {foto: require('../../../assets/onça-pintada.jpg'),
      nome: 'Onça Pintada',
      desc: 'A onça-pintada pesa aproximadamente 100 quilos e mede até 1,8 metro de comprimento. Habita florestas densas e pantanais que se estendem do México até o norte da Argentina.',
      icon1:require ('../../../assets/americas.png'),
      dieta:' Carnívora	🥩',
      },

      {foto: require('../../../assets/quati.jpg'),
      nome: 'Quati',
      desc: 'O quati mede cerca de 70 centímetros de comprimento e habita regiões que vão do Arizona até o norte da Argentina. Tem dieta onívora, alimentando-se de frutas, pequenos invertebrados, répteis e mamíferos.',
      icon1:require('../../../assets/americas.png'),
      dieta:'Onívora 🍌🐛🦎',
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
    const abrirModal8 = () =>{
      setAnimal(8)
      setModal(true)
    }
    const abrirModal9 = () =>{
      setAnimal(9)
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
            <Image style={styles.image} source={require('../../../assets/cagado-de-barbicha.jpg')}/>
          <Text style={styles.texto}>Cagado de Barbicha</Text>
            </Animatable.View> 
          </Pressable>

          <Pressable style={styles.pressable} onPress={abrirModal1}>
            <Animatable.View animation={"bounceInRight"} delay="500">
            <Image style={styles.image} source={require('../../../assets/elefante-asiatico.jpg')}/>
            <Text style={styles.texto}>Elefante Asiatico</Text>
            </Animatable.View>
          </Pressable>

          <Pressable style={styles.pressable} onPress={abrirModal2}>
            <Animatable.View animation={"bounceInLeft"} delay="750">
            <Image style={styles.image} source={require('../../../assets/flamingo.jpg')}/>
            <Text style={styles.texto}>Flamingo</Text>
            </Animatable.View>
          </Pressable>

          <Pressable style={styles.pressable} onPress={abrirModal3}>
            <Animatable.View animation={"bounceInRight"} delay="1000">
            <Image style={styles.image} source={require('../../../assets/gato-do-mato.jpg')}/>
            <Text style={styles.texto}>Gato do Mato</Text>
            </Animatable.View>
          </Pressable>

          <Pressable style={styles.pressable} onPress={abrirModal4}>
            <Animatable.View animation={"bounceInLeft"} delay="1250">
            <Image style={styles.image} source={require('../../../assets/irara.jpg')}/>
            <Text style={styles.texto}>Irara</Text>
            </Animatable.View>
          </Pressable>

          <Pressable style={styles.pressable} onPress={abrirModal5}>
            <Animatable.View animation={"bounceInRight"} delay="1500">
            <Image style={styles.image} source={require('../../../assets/jacaré-açu.jpg')}/>
            <Text style={styles.texto}>Jacaré Açu</Text>
            </Animatable.View>
          </Pressable>

          <Pressable style={styles.pressable} onPress={abrirModal6}>
            <Animatable.View animation={"bounceInLeft"} delay="1750">
            <Image style={styles.image} source={require('../../../assets/lobo-guará.jpg')}/>
            <Text style={styles.texto}>Lobo Guará</Text>
            </Animatable.View>
          </Pressable>

          <Pressable style={styles.pressable} onPress={abrirModal7}>
            <Animatable.View animation={"bounceInRight"} delay="2000">
            <Image style={styles.image} source={require('../../../assets/onça-parda.jpg')}/>
            <Text style={styles.texto}>Onça Parda</Text>
            </Animatable.View>
          </Pressable>

          <Pressable style={styles.pressable} onPress={abrirModal8}>
            <Animatable.View animation={"bounceInLeft"} delay="2250">
            <Image style={styles.image} source={require('../../../assets/onça-pintada (horizontal).jpg')}/>
            <Text style={styles.texto}>Onça Pintada</Text>
            </Animatable.View>
          </Pressable>

          <Pressable style={styles.pressable} onPress={abrirModal9}>
            <Animatable.View animation={"bounceInLeft"} delay="2500">
            <Image style={styles.image} source={require('../../../assets/quati.jpg')}/>
            <Text style={styles.texto}>Quati</Text>
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
              <Text style={styles.text}>Dieta:<Text style={styles.dieta}>{zoologico[animal].dieta} </Text></Text>
                <Pressable style={styles.Fechar} onPress={fecharModal}>
                  <Image source={require('../../../assets/iconeFechar2.png')} style={styles.iconeFechar} />
                </Pressable>
            </View>
          </View>
        </Modal>
        
        <StatusBar style="auto" />
      </View>
    );
  }