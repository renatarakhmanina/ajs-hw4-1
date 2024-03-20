export default function displayHealthLevel(player) {
  if (player.health > 50) {
    return "healthy";
  } else if (player.health >= 15 && player.health <= 50) {
    return "wounded";
  } else {
    return "critical";
  }
}