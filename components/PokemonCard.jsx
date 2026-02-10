import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function PokemonCard({ item, onPress, onToggleFavorite, isFavorite }) {
  const img = item.sprites.other['official-artwork'].front_default;

  const handleFavoritePress = (e) => {
    if (e) e.stopPropagation();
    if (onToggleFavorite) {
      onToggleFavorite();
    }
  };

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: img }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.name}>{item.name.charAt(0).toUpperCase() + item.name.slice(1)}</Text>
        <Text>Type: {item.types.map(t => t.type.name).join(', ')}</Text>
        <Text>Height: {item.height}</Text>
        <Text>Weight: {item.weight}</Text>
      </View>
      {onToggleFavorite && (
        <TouchableOpacity onPress={handleFavoritePress}>
          <Text style={styles.star}>{isFavorite ? '★' : '☆'}</Text>
        </TouchableOpacity>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: { flexDirection: 'row', padding: 10, marginVertical: 6, backgroundColor: '#fff', borderRadius: 10 },
  image: { width: 70, height: 70 },
  textContainer: { flex: 1, marginLeft: 12 },
  name: { fontSize: 20, fontWeight: 'bold', marginBottom: 4 },
  star: { fontSize: 24 }
});