import { View, Text, FlatList } from 'react-native'
import useFetch from '../../hooks/useFetch'
import CountryCard from '../../components/CountryCard/CountryCard'

const SettingsPage = () => {

  const {data} = useFetch("https://run.mocky.io/v3/104eca1a-b24d-497e-92bd-a6fa241e0524")

  const renderData = ({item}) => <CountryCard country={item} />
  
  return (
    <View style={{backgroundColor: "#489bff", flex: 1}}>
      <Text>SettingsPage</Text>
      <FlatList data={data} renderItem={renderData} />
    </View>
  )
}

export default SettingsPage