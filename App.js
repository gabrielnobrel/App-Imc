import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Keyboard,
} from "react-native";

//IMAGENS
import idealImage from "./src/assets/ideal.png";
import magroImage from "./src/assets/magro.png";
import sobrepesoImage from "./src/assets/sobrepeso.png";

export default function App() {
  const [weight, setWeight] = useState(""); //peso
  const [height, setHeight] = useState(""); //altura

  const [resultImc, setResultImc] = useState("...");
  const [image, setImage] = useState(null);

  function handleSubmit() {
    Keyboard.dismiss();
    //Verificação de preenchimento de campos
    if (
      isNaN(parseFloat(weight)) ||
      isNaN(parseFloat(height)) ||
      weight === null ||
      height === null
    ) {
      setWeight("");
      setHeight("");
      alert("Preencha todos os campos");
      return;
    }

    //CÁLCULO
    const transformHeight = height / 100;
    const calculateImc = weight / (transformHeight * transformHeight);

    //REGRAS IMC
    if (calculateImc < 18.5) {
      setResultImc("Magro");
      setImage(magroImage);
    } else if (calculateImc >= 18.5 && calculateImc <= 24.9) {
      setResultImc("Ideal");
      setImage(idealImage);
    } else if (calculateImc > 24.9) {
      setResultImc("Sobrepeso");
      setImage(sobrepesoImage);
    }
    setWeight("");
    setHeight("");
  }

  return (
    <View style={styles.container}>
      <StatusBar
        backgroundColor="transparent"
        barStyle="light-content"
        translucent={true}
      />

      {/* CABEÇALHO */}
      <View style={styles.header}>
        <Text style={styles.title}>CÁLCULO DO IMC</Text>
        <Text style={styles.subtitle}>
          Descubra seu índice de Massa Corporal
        </Text>

        {/* INPUTS */}
        <View style={styles.areaWeightHeight}>
          {/* ÁREA ALTURA */}
          <View style={styles.areaInput}>
            <Text style={styles.inputText}>Peso (kg)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={weight}
              onChangeText={(text) => setWeight(text)}
            />
          </View>

          {/* ÁREA PESO */}
          <View style={styles.areaInput}>
            <Text style={styles.inputText}>Altura (cm)</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={height}
              onChangeText={(text) => setHeight(text)}
            />
          </View>
        </View>

        {/* BOTÃO */}
        <TouchableOpacity style={styles.areaButton} onPress={handleSubmit}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
      </View>

      {/* ÁREA IMAGEM */}
      <View style={styles.bottomArea}>
        {/* TEXTO */}
        <View style={styles.textArea}>
          <Text style={styles.textResult}>Seu índice de massa corporal é:</Text>
          <Text style={styles.textImc}>{resultImc}</Text>
        </View>

        {/* IMAGEM */}
        <View style={styles.areaImage}>
          <Image
            source={image}
            style={{ height: "100%" }}
            resizeMode="contain"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#51B1C0",
    alignItems: "center",
  },

  header: {
    marginTop: 60,
    alignItems: "center",
    justifyContent: "center",
  },

  title: {
    color: "white",
    fontSize: 30,
    fontWeight: "900",
  },

  subtitle: {
    color: "white",
    marginTop: 12,
    fontSize: 16,
  },

  areaWeightHeight: {
    display: "flex",
    flexDirection: "row",
    marginTop: 50,
    gap: 39,
    alignItems: "center",
    justifyContent: "center",
  },

  inputText: {
    fontSize: 20,
    fontWeight: "700",
    color: "#FFFFFF",
  },

  areaInput: {
    width: 132,

    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: "100%",
    height: 36,
    borderRadius: 8,
    marginTop: 7,
    textAlign: "center",

    backgroundColor: "#FFFFFF",
    color: "#1A1A1A",
    fontSize: 16,
  },

  areaButton: {
    width: 351,
    height: 47,

    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginTop: 50,
    backgroundColor: "#FFFFFF",
  },

  textButton: {
    fontSize: 20,
    fontWeight: "700",
    color: "#51B1C0",
  },

  // BOTTOM AREA
  bottomArea: {
    flex: 1,
    marginTop: 48,
    width: "100%",
    backgroundColor: "#FFFFFF",
  },

  textArea: {
    alignItems: "center",
    justifyContent: "center",
  },

  textResult: {
    marginTop: 12,

    fontSize: 16,
    color: "#51B1C0",
  },

  textImc: {
    fontSize: 20,
    fontWeight: "700",
    color: "#51B1C0",
    marginTop: 8,
  },

  areaImage: {
    width: "100%",
    height: 360,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
  },
});
