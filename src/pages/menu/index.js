import { StatusBar } from 'expo-status-bar';
import { Text, View, Pressable, Image, Modal } from 'react-native';
import { useState } from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

export default function Menu() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation();

  return (
    <View style={styles.container}> 
      
      {/* HEADER */}
      <View style={styles.headView}> 
        <Text style={styles.headTexto}>MENU</Text>

        <Pressable onPress={() => setModalVisible(true)}>
          <Image
            style={styles.icone}
            source={require('../../../assets/3 barras.png')}
          />
        </Pressable>
      </View>

      {/* MODAL */}
      <Modal
        transparent
        animationType="fade"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>

            <Pressable onPress={() => {
              setModalVisible(false);
              navigation.navigate('login');
            }}>
              <Text style={styles.modalItem}>Login</Text>
            </Pressable>

            <Pressable onPress={() => {
              setModalVisible(false);
              navigation.navigate('ingresso');
            }}>
              <Text style={styles.modalItem}>Ingresso</Text>
            </Pressable>

            <Pressable onPress={() => {
              setModalVisible(false);
              navigation.navigate('sobre');
            }}>
              <Text style={styles.modalItem}>Sobre</Text>
            </Pressable>

            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={[styles.modalItem, { color: 'red' }]}>
                Fechar
              </Text>
            </Pressable>

          </View>
        </View>
      </Modal>

      {/* LINHA 1 */}
      <View style={styles.view}>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate('territorio1')}>
          <Animatable.View animation="bounceInLeft" delay={250}>
            <Image style={styles.image} source={require('../../../assets/onça-pintada.jpg')} />
            <Text style={styles.texto}>TERRITÓRIO 1</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={() => navigation.navigate('territorio2')}>
          <Animatable.View animation="bounceInRight" delay={500}>
            <Image style={styles.image} source={require('../../../assets/arara-azul-grande.jpg')} />
            <Text style={styles.texto}>TERRITÓRIO 2</Text>
          </Animatable.View>
        </Pressable>
      </View>

      {/* LINHA 2 */}
      <View style={styles.view}>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate('territorio3')}>
          <Animatable.View animation="bounceInLeft" delay={750}>
            <Image style={styles.image} source={require('../../../assets/salamandra-mexicana.jpg')} />
            <Text style={styles.texto}>TERRITÓRIO 3</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={() => navigation.navigate('territorio4')}>
          <Animatable.View animation="bounceInRight" delay={1000}>
            <Image style={styles.image} source={require('../../../assets/girafa.jpg')} />
            <Text style={styles.texto}>TERRITÓRIO 4</Text>
          </Animatable.View>
        </Pressable>
      </View>

      {/* LINHA 3 */}
      <View style={styles.view}>
        <Pressable style={styles.pressable} onPress={() => navigation.navigate('territorio5')}>
          <Animatable.View animation="bounceInLeft" delay={1250}>
            <Image style={styles.image} source={require('../../../assets/aguia-cinzenta.jpg')} />
            <Text style={styles.texto}>TERRITÓRIO 5</Text>
          </Animatable.View>
        </Pressable>

        <Pressable style={styles.pressable} onPress={() => navigation.navigate('territorio6')}>
          <Animatable.View animation="bounceInRight" delay={1500}>
            <Image style={styles.image} source={require('../../../assets/orangotango.jpg')} />
            <Text style={styles.texto}>TERRITÓRIO 6</Text>
          </Animatable.View>
        </Pressable>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}
