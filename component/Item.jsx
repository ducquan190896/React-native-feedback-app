import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Card } from '@rneui/base'
import { useTailwind } from 'tailwind-rn/dist'
import { AntDesign } from '@expo/vector-icons'; 
import { useDispatch, useSelector } from 'react-redux';
import { deleteFeedback, openUpdateButton } from '../actions/FeedBackAction';

const Item = ({feed}) => {
  const [openCard, setOpenCard] = useState(false)
  const tw = useTailwind();
  const {text, rating, id} = feed
  const {feedback, feedbacks, fbSuccess, fbError, updateStatus, updateFeedback} = useSelector(state => state.FB)
  const dispatch = useDispatch();
  const deleteFeed = () => {
     dispatch(deleteFeedback(id))
    
  } 
  const updateFeed = () => {
    dispatch(openUpdateButton({id, text, rating}))
  }

  return (
    <TouchableOpacity onPress={() => setOpenCard(prev => !prev)} activeOpacity={0.1} style={tw('w-full')}>
      <Card containerStyle={tw('w-full mb-4 relative pt-6 pb-4 px-8 mx-auto rounded-2xl  bg-white')}>
      <Text style={tw('font-bold text-lg text-blue-400')}>{text}</Text>
      <View style={tw('bg-red-500 rounded-full h-10 w-10 items-center justify-center -top-10 -left-12 absolute z-10')}>
        <Text style={tw('text-white text-lg font-bold text-center')}>{rating}</Text>
      </View>
      {openCard && (
      <View style={tw('mx-auto mt-4 flex-row items-center justify-center')}>
        <TouchableOpacity onPress={deleteFeed} activeOpacity={0.3} style={tw('mr-8 ')}>
          <AntDesign name="delete" size={26} color="white" style={tw('bg-red-500 rounded-full h-10 w-10 p-2 text-center')}/>
        </TouchableOpacity>
        <TouchableOpacity  onPress={updateFeed}>
          <AntDesign activeOpacity={0.3}  name="edit" size={26} color="white"  style={tw('bg-red-500 rounded-full h-10 w-10  text-center p-2')}/>
        </TouchableOpacity>
      </View>
    )}
    </Card>
   
    </TouchableOpacity>
  )
}

export default Item

