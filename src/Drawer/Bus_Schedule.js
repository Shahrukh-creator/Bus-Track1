

import React, { Component } from 'react';
import { Text, View, ImageBackground, TouchableHighlight, StyleSheet } from 'react-native';
import CustomHeader from '../CustomHeader';
import firebase1 from '../../database1/firebase1';
import { DataTable } from 'react-native-paper';

let Value1 = "";
let Value2 = "";
let Value3 = "";
let Value4 = "";
let Value5 = "";
let Value6 = "";
let Value7 = "";
let Value8 = "";
let Value9 = "";
let Value10 = "";

export default class Bus_Schedule extends Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        firebase1.database().ref('Schedule/Route-01/AlliedMorh').on('value', function (snapshot) {
            const exists = (snapshot.val() != null);

            if (exists)

                Value1 = parseFloat(snapshot.val());
            console.log('Tag 1: ', Value1);

        })


    }


    render() {

        return (
            <ImageBackground source={require('D:/React Native apps/track-full-app/assets/yellow_bus.jpg')} style={{ width: '100%', height: '100%' }}>
                <CustomHeader title="Bus Status" navigation={this.props.navigation} />
                <View style={{ flex: 1, paddingTop: 25, }}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                        <DataTable style={{ top: -112 }}>
                            <DataTable.Header style={{ backgroundColor: 'lightblue' }}>
                                <DataTable.Title style={{ justifyContent: 'center', alignItems: 'center' }}><Text style={{ fontSize: 20, fontWeight: "bold" }}>Route 1</Text></DataTable.Title>

                            </DataTable.Header>

                            <View style={{ backgroundColor: '#D1FDFF' }}>

                                <DataTable.Row>
                                    <DataTable.Cell style={{ marginLeft: 10 }}><Text style={{ fontSize: 15, fontWeight: "bold" }}>AlliedMorh:</Text></DataTable.Cell>
                                    <DataTable.Cell style={{ marginLeft: 100 }}><Text style={{ fontSize: 10, }}>7:55AM</Text></DataTable.Cell>
                                </DataTable.Row>


                                <DataTable.Row>
                                    <DataTable.Cell style={{ marginLeft: 10 }}><Text style={{ fontSize: 15, fontWeight: "bold" }}>DaewooExpress</Text></DataTable.Cell>
                                    <DataTable.Cell style={{ marginLeft: 100 }}><Text style={{ fontSize: 10, }}>7:50AM</Text></DataTable.Cell>
                                </DataTable.Row>


                                <DataTable.Row>
                                    <DataTable.Cell style={{ marginLeft: 10 }}><Text style={{ fontSize: 15, fontWeight: "bold" }}>Kohinoor:</Text></DataTable.Cell>
                                    <DataTable.Cell style={{ marginLeft: 100 }}><Text style={{ fontSize: 10 }}>7:45AM</Text></DataTable.Cell>
                                </DataTable.Row>


                                <DataTable.Row>
                                    <DataTable.Cell style={{ marginLeft: 10 }}><Text style={{ fontSize: 15, fontWeight: "bold" }}>FAST University:</Text></DataTable.Cell>
                                    <DataTable.Cell style={{ marginLeft:100}}><Text style={{ fontSize: 10 }}>8:30AM</Text></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell style={{ marginLeft: 10 }}><Text style={{ fontSize: 15, fontWeight: "bold" }}>GTS:</Text></DataTable.Cell>
                                    <DataTable.Cell style={{ marginLeft: 100 }}><Text style={{ fontSize: 10 }}>7:35AM</Text></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell style={{ marginLeft: 10 }}><Text style={{ fontSize: 15, fontWeight: "bold" }}>Motorway City:</Text></DataTable.Cell>
                                    <DataTable.Cell style={{ marginLeft: 100 }}><Text style={{ fontSize: 10 }}>8:10AM</Text></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell style={{ marginLeft: 10 }}><Text style={{ fontSize: 15, fontWeight: "bold" }}>Pearl City:</Text></DataTable.Cell>
                                    <DataTable.Cell style={{ marginLeft: 100 }}><Text style={{ fontSize: 10 }}>8:05AM</Text></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell style={{ marginLeft: 10 }}><Text style={{ fontSize: 15, fontWeight: "bold" }}>Railway Station:</Text></DataTable.Cell>
                                    <DataTable.Cell style={{ marginLeft: 100 }}><Text style={{ fontSize: 10 }}>7:30AM</Text></DataTable.Cell>
                                </DataTable.Row>

                                <DataTable.Row>
                                    <DataTable.Cell style={{ marginLeft: 10 }}><Text style={{ fontSize: 15, fontWeight: "bold" }}>PIA:</Text></DataTable.Cell>
                                    <DataTable.Cell style={{ marginLeft: 100 }}><Text style={{ fontSize: 10 }}>7:40AM</Text></DataTable.Cell>
                                </DataTable.Row>

                            </View>

                        </DataTable>


                    </View>

                </View>

            </ImageBackground>

        );
    }
}



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEF9E7',
        flex: 1,
        paddingTop: 300,
        padding: 90
    },

    appButtonText: {
        fontSize: 15,
        color: "#fff",
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    }

});



