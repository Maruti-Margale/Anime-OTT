MyApp.directive('animeSort', function () {
  return {
    restrict: 'E', // Restrict the directive to be used as an element
    template: `
    <div class="sort">
    <div class="label-container">
   <label for="sortBy">Sort by:</label>
   </div>
   <div class="input-container">
   <img src="/images/mainimages/Gojo-PNG-Picture.png" alt="" class="sort-image" >
   <select id="sortBy" ng-model="sortFilter">
       <option value="">All</option>
       <option value="Most Popular Anime">Most Popular Anime</option>
       <option value="Trending Anime">Trending Anime</option>
       <option value="Slice Of Life Anime">Slice Of Life Anime</option>
       <option value="Isekai Anime">Isekai Anime</option>
       <option value="Comedy Anime">Comedy Anime</option>
       <option value="Anime Movies">Anime Movies</option>
       <option value="Ecchi Anime">Ecchi Anime</option>
   </select>
    </div>
  </div>
    `
  }
});