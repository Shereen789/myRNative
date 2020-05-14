import React from 'react';
import { StyleSheet, Text, View,TextInput,ScrollView,TouchableOpacity} from 'react-native';
import Note from './Note';

export default class Main extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            noteArray:[],
            noteText: '',
        }
    }

    render(){
      let notes= this.state.noteArray.map((val,key)=>{
        return <Note key ={key} keyval = {key} val ={val}
                deleteMethod={()=> this.deleteNote(key)}/>
        });
      return (
        <View style={styles.container}>
        <View style = {styles.header}>
            <Text style = {styles.headerText}>Ira's Notes</Text>
        </View>
        <ScrollView style = {styles.scrollContainer}>
            {notes}
        </ScrollView>
        <View style = {styles.footer}>
            <TextInput style = {styles.testInput}
            placeholder= 'Add a task'
            placeholderTextColor = 'white'
            onChangeText ={(noteText)=> this.setState({noteText})}
            value={this.state.noteText}
            underlineColorAndroid = 'transparent'>

            </TextInput>
        </View>
        <TouchableOpacity onPress={this.addNote.bind(this)} style = {styles.addButton}>
            <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
        </View>
        );
    }
    addNote(){
      // alert("Help!!")
        if(this.state.noteText){
            var d = new Date();
            console.log(d);
            this.state.noteArray.push({
                'date': d.getFullYear()+"/"+(d.getMonth()+1)+"/"+d.getDate(),
              'note':this.state.noteText});
            this.setState({noteArray: this.state.noteArray})
            this.setState({noteText:''});

        }
    }
}

const styles = StyleSheet.create({
  container: {
    padding:2,
    marginTop:20,
    marginLeft:12,
    flex: 1,
  },
  header:{
    backgroundColor:'#E91E63',
    alignItems:'center',
    justifyContent:'center',
    borderBottomWidth:10,
    borderBottomColor:'#ddd',
  },
  headerText:{
    color:'white',
    fontSize:20,
    padding:26,
  },
  scrollContainer:{
    flex:1,
    marginBottom:100,
  },
  footer:{
    backgroundColor:'pink',
    height:50,
    bottom:0,
    left:0,
    right:0,
    zIndex:10,
  },
  TextInput:{
    alignSelf:'stretch',
    padding:20,
    height:25,

    borderTopWidth:2,

    color:'black'
  },
  addButton:{
    position:'absolute',
    zIndex:11,
    right:20,
    bottom:90,
    backgroundColor:'#E91E63',
    width:90,
    height:90,
    // borderRadius:50,
    alignItems:'center',
    justifyContent:'center',
    elevation:8,
  },
  addButtonText:{
    color:'#fff',
    fontSize:24,
  },
});
