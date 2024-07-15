MyApp.filter('imageTitleFilter', function () {
  return function (images, searchText) {
      // If no search text is provided, return all images
      if (!searchText) {
          return images;
      }

      // It Convert the search text to lowercase for matching
      searchText = searchText.toLowerCase();

      // Here We Used Array.filter method to filter images based on search 
      return images.filter(function (image) {
          const imageTitle = image.imageTitle.toLowerCase();

          // Here It Check's if all letters in searchText exist in imageTitle
          for (let i = 0; i < searchText.length; i++) {
              // Here It Check's If a letter from searchText is not found in imageTitle, exclude the image
              if (imageTitle.indexOf(searchText[i]) === -1) {
                  return false;
              }
          }

          // If all letters in searchText were found in imageTitle, include the image
          return true;
      });
  };
});