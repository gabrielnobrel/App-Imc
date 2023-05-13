import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";

export default function App() {
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
            <TextInput style={styles.input} />
          </View>

          {/* ÁREA PESO */}
          <View style={styles.areaInput}>
            <Text style={styles.inputText}>Altura (cm)</Text>
            <TextInput style={styles.input} />
          </View>
        </View>

        {/* BOTÃO */}
        <TouchableOpacity style={styles.areaButton}>
          <Text style={styles.textButton}>Calcular</Text>
        </TouchableOpacity>
      </View>

      {/* ÁREA IMAGEM */}
      <View style={styles.bottomArea}>
        {/* TEXTO */}
        <View style={styles.textArea}>
          <Text style={styles.textResult}>Seu índice de massa corporal é:</Text>
          <Text style={styles.textImc}>Ideal</Text>
        </View>

        {/* IMAGEM */}
        <View style={styles.areaImage}>
          <Image
            source={require("./src/assets/ideal.png")}
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
    alignItems: "center",
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
