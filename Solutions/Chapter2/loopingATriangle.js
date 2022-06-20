let hash = "#";
while (hash.length < 8) {
  console.log(hash);
  hash += "#"
}

for (let line = "#"; line.length < 8; line += "#")
  console.log(line);

/* Prints:
  #
  ##
  ###
  ####
  #####
  ######
  #######
*/