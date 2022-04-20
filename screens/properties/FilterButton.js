import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

function FilterButton(props){
  // console.log(props)
  const navigation = useNavigation();
  return(
    <Button mode="outlined" color='grey' onPress={()=>navigation.navigate('Filter', {path:props.path})}>Filter</Button>
  )
}

export default FilterButton