import { Text, Pressable } from 'react-native'

import styles from './CountryCard.style'

const CountryCard = ({country}) => {
  return (
    <Pressable onPress={null}>
        <Text style={styles.text}>{country.name}</Text>
    </Pressable>
  )
}

export default CountryCard