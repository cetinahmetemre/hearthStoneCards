import React , {Component} from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Card from "../components/Card";

class CardDetailScreen extends Component {

    constructor(props){
        super(props)
        this.state={cardHeight:10,cardDetail:[]}
        this.state.cardDetail = this.props.navigation.state.params.cardDetail;
    }

    static navigationOptions= ({navigation}) => ( {
        headerTitle:(
            <View style={{flexDirection:"row",alignItems:"center",marginLeft:5}}>        
                <Image source={require('../../img/titleLogo.png')} style={{width:40,height:40}}/>
                <Text style={{color:"white",fontSize:17,fontWeight:"bold",marginLeft:10}}>{navigation.state.params.cardDetail.name}</Text>
            </View>
        ),
        headerTintColor: "black", 
        headerStyle: {
            backgroundColor: "#286f8f",
        }
    });
    render(){
    return (
        <View style={styles.container}>
            <Card card={this.state.cardDetail} />
        </View>
    );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20,
  },
});

export default CardDetailScreen;
