import React , {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, FlatList, Image, Dimensions, ActivityIndicator, TextInput } from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import Ionicons from 'react-native-vector-icons/Ionicons';
import debounce from 'lodash/debounce';

let {height, width} = Dimensions.get('window');

class SearchScreen extends Component {

constructor(props){
    super(props)
    this.state={cards:[],searchingText:"",cardHeight:10,searching:false}
    this.FlipRef = []
}

    setSearchQuery = debounce((text) => {
        this.setState({ searchingText:text})    
        if(this.state.searchingText != "" && this.state.searchingText.length>3)
        {
            this.searchCards();
        }
    }, 1500)

    static navigationOptions= ({navigation}) => ( {
        headerTitle:(
            <View style={{flexDirection:"row",alignItems:"center",marginLeft:5}}>        
                <Image source={require('../../img/titleLogo.png')} style={{width:40,height:40}}/>
                <Text style={{color:"white",fontSize:17,fontWeight:"bold",marginLeft:10}}>Card Search</Text>
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
            <View style={styles.searchView}>
                <Ionicons  style={{color:"black",marginTop:2}} name="ios-search" size={35}/>
                <TextInput 
                    placeholderTextColor='black' 
                    style={styles.input} 
                    placeholder="Search card with name"  
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    returnKeyType="search" 
                    onChangeText={this.setSearchQuery}                             
                />
            </View>
            {this.state.searching == false ?
            <FlatList
                ref={(list) => this.myFlatList = list}  
                data={this.state.cards}
                keyExtractor={(item, index) => item.cardId}
                renderItem={({item, index})=>( 
                <TouchableOpacity style={{width:100+"%"}} onPress={()=> this.props.navigation.navigate("CardDetail",{cardDetail:item})}>
                    <AutoHeightImage width={width-40} source={{uri:item.img}} />
                </TouchableOpacity>                 
                )}
                removeClippedSubviews={true}  
                extraData={this.state}   
                />
            :
            <ActivityIndicator size="large" color="#8ba8a6" style={{marginTop:50}} />}
        </View>
    );
    }  

  searchCards = () =>{
        this.setState({searching:true})
        fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards/search/"+this.state.searchingText, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
            "x-rapidapi-key": "4c63dbcdf5mshf8fff212a01d1cdp1cb1aejsnc77fbc36aa8e"
        }
        })
        .then((response) => response.json())
        .then((res)=> {
            this.FlipRef=[];
            this.setState({cards:res.slice(0, 15),searching:false})
        })
        .catch(err => {
            console.log(err);
        });
    
    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal:20,
  },
  cardDetailView:{
    width:100+"%",
    flexDirection:"row",
    alignItems:"center",
  },
  cardDetail:{
    fontSize:15,
    color:"white",
    fontWeight:"bold"
  },
  cardDetailText:{
      fontSize:13,
      color:"white",
      flexShrink: 1,
  },
  searchView:{
    width:85+"%",
    flexDirection:"row",
    alignItems:"center",
    marginVertical:15,
    paddingLeft:20,
    paddingVertical:5,
    borderWidth:1,
    borderColor:"black",
    borderRadius:10,
    alignSelf:"center"
  },
  input:{
    height:40,       
    color:'black',
    borderRadius:15,
    paddingHorizontal:10,
    flex:1,
    borderWidth:0,
},
});

export default SearchScreen;
