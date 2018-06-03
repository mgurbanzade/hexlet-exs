const diff = (deg1, deg2) => {
  let difference = Math.abs(deg1 - deg2);

  return 360 - difference < difference ? 360 - difference : difference;
}

console.log(diff(0, 190));
