import React, { Component } from 'react'
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nilaiAkhir: 0,
      nilaiAwal: 0,
    };
  }

  input = (value) => {
    if (this.state.nilaiAwal == 0) {
      this.setState({ nilaiAwal: value })
    }
    else {
      this.setState({ nilaiAwal: this.state.nilaiAwal + "" + value })
    }
  }

  count = () => {
    let nilaiAkhir = eval(this.state.nilaiAwal)
    this.setState({nilaiAwal: nilaiAkhir})
  }

  render() {
    return (
      <View style={{ flex: 1, backgroundColor: "gray" }}>

        <ScrollView>
          <View>
            <Text style={{ color: "black", fontSize: 50, marginHorizontal: 10, marginVertical: 7, textAlign: 'right' }}>{this.state.nilaiAwal}</Text>
          </View>
        </ScrollView>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(`(`)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#795548", fontWeight: 'bold', borderRadius: 50 }}>(</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(`)`)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#795548", fontWeight: 'bold', borderRadius: 50 }}>)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(`/`)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#795548", fontWeight: 'bold', borderRadius: 50 }}>/</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input( `*`)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#795548", fontWeight: 'bold', borderRadius: 50 }}>x</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(7)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#a98274", borderRadius: 50 }}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(8)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#a98274", borderRadius: 50 }}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(9)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#a98274", borderRadius: 50 }}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(`-`)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#795548", fontWeight: 'bold', borderRadius: 50 }}>-</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(4)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#a98274", borderRadius: 50 }}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(5)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#a98274", borderRadius: 50 }}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(6)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#a98274", borderRadius: 50 }}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(`+`)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#795548", fontWeight: 'bold', borderRadius: 50 }}>+</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(1)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#a98274", borderRadius: 50 }}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(2)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#a98274", borderRadius: 50 }}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(3)}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#a98274", borderRadius: 50 }}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.count()}>
            <Text style={{ color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#795548", fontWeight: 'bold', borderRadius: 50 }}>=</Text>
          </TouchableOpacity>
        </View>



        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={{ flex: 1, justifyContent: "center", padding: 15 }} onPress={() => this.input(0)}>
            <Text style={{ width: 250, color: "black", fontSize: 40, textAlign: 'center', backgroundColor: "#a98274", padding: 15, borderRadius: 50 }}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ flex: 1, alignItems: "flex-end", padding: 15 }} onPress={() => this.setState({nilaiAwal: 0})}>
            <Text style={{ width: 103, color: "black", fontSize: 40, textAlign: "center", backgroundColor: "#4b2c20", padding: 15, fontWeight: 'bold', borderRadius: 30 }}>AC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default App;