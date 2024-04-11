// task 1
const tableParsing = (content) => {
  const [keys, ...lines] = content
    .split('\n')
    .filter((line) => line !== '')
    .map((line) => line.split(';'));

  const data = lines
    .map((line) => line
      .reduce((acc, value, i) => {
        acc[keys[i]] = value;
        return acc;
      }, {}));

  // 1
  const topMessenger = data
    .sort((a, b) => (a.playmarket_rating - b.playmarket_rating)
     + (
       a.appstore_rating - b.appstore_rating))
    .at(data.length - 1);

  // 2
  const numIndia = data
    .map(({ downloads_in_India: minimal }) => Number(minimal));

  const minIndia = Math.min(...numIndia);
  const maxIndia = Math.max(...numIndia);

  // 3

  const topInAustralia = data
    .sort((a, b) => Number(b.downloads_in_Australia) - Number(a.downloads_in_Australia))
    const firstAustralia = topInAustralia.at(1).name
    const secondAustralia = topInAustralia.at(2).name
    const thirdAustralia = topInAustralia.at(3).name
    
        // 4
// downloads_in_Russia     downloads_in_Australia    downloads_in_India    downloads_in_England
        const topDownloads = data
                .sort((a, b) => (a.downloads_in_Russia - b.downloads_in_Russia ) 
                +
                 (a.downloads_in_Australia - b.downloads_in_Australia) 
                 + 
                 (a.downloads_in_India - b.downloads_in_India) 
                 + 
                 (a.downloads_in_England - b.downloads_in_England))
                 .map((dev) => dev.name)


        
  console.log(`General top messenger: ${topMessenger.name}, Owner: ${topMessenger.developer}`);
  console.log(`Download count: Max count: ${maxIndia}, Min count: ${minIndia}`);
  console.log(`Top-3 Australia: ${firstAustralia}, ${secondAustralia}, ${thirdAustralia}`);
  console.log(`Top downloads: ${topDownloads.join(', ')}`);


};

// task 2
const candidateAssessment = (/* content */) => {

};

// task 3
const actorRating = (/* content */) => {

};

export { tableParsing, candidateAssessment, actorRating };
