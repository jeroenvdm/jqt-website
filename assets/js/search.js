/* Search with Multilingual Support
   ====================================================
   Based on: https://retifrav.github.io/blog/2020/01/05/hugo-search/
   Modified for multilingual (EN/NL) support
   ==================================================== */

var searchResults = document.getElementById("js-results-container");
var searchInput = document.getElementById("js-search-input");
var contextDive = 95;
var timerUserInput = false;

// Detect current language from URL
function getCurrentLanguage() {
  var pathParts = window.location.pathname.split('/').filter(function(part) {
    return part.length > 0;
  });

  // Check if first path segment is a language code
  if (pathParts.length > 0 && (pathParts[0] === 'en' || pathParts[0] === 'nl')) {
    return pathParts[0];
  }

  // Default to English
  return 'en';
}

// Get language-specific index path
function getIndexPath() {
  var lang = getCurrentLanguage();
  return '/' + lang + '/index.json';
}

function search(query) {
  // Clear previous results
  while (searchResults.firstChild) {
    searchResults.removeChild(searchResults.firstChild);
  }

  // Check if query is valid
  if (query.length === 0 || query.length < 1) {
    searchResults.style.display = "none";
    return;
  }

  searchResults.style.display = "block";

  // Load language-specific index
  var indexPath = getIndexPath();

  getJSON(indexPath, function(data) {
    var results = [];
    var searchRegex = new RegExp(query, "i");
    var currentLang = getCurrentLanguage();

    // Filter results by current language and search query
    data.forEach(function(item) {
      // Only show results for current language
      if (item.lang === currentLang &&
          (item.title.match(searchRegex) || item.content.match(searchRegex))) {
        results.push(item);
      }
    });

    if (results.length > 0) {
      // Show result count
      searchResults.appendChild(
        htmlToElement('<h4 class="search-counter">Found: ' + results.length + '</h4>')
      );

      // Display each result
      results.forEach(function(result, index) {
        var matchIndex = result.content.toLowerCase().indexOf(query.toLowerCase());
        var matchEnd = matchIndex + query.length;
        var contextStart = matchIndex - contextDive;

        // Adjust context start
        if (contextStart > 0) {
          var spaceIndex = result.content.indexOf(" ", contextStart) + 1;
          contextStart = (spaceIndex < matchIndex) ? spaceIndex : matchIndex - (contextDive / 2);
        } else {
          contextStart = 0;
        }

        // Adjust context end
        var contextEnd = matchEnd + contextDive;
        if (contextEnd < result.content.length) {
          var spaceIndex = result.content.indexOf(" ", contextEnd);
          if (spaceIndex !== -1) {
            contextEnd = spaceIndex;
          } else {
            contextEnd = matchEnd + (contextDive / 2);
          }
        } else {
          contextEnd = result.content.length - 1;
        }

        // Extract context
        var contextText = result.content.substring(contextStart, contextEnd);
        if (contextStart !== 0) {
          contextText = "..." + contextText;
        }
        if (contextEnd !== result.content.length - 1) {
          contextText = contextText + "...";
        }

        // Build result HTML
        var resultHtml =
          '<div class="search-results__item" id="search-summary-' + index + '">' +
            '<a class="search-results__link" href="' + result.permalink + '">' +
              '<div class="result-title">' + result.title + '</div>' +
              '<span class="search-results-date">' +
                '<time>' + result.date + '</time>' +
              '</span>' +
            '</a>' +
          '</div>';

        searchResults.appendChild(htmlToElement(resultHtml));
      });
    } else {
      // No results found
      searchResults.appendChild(
        htmlToElement('<h3 class="no-results">No results found</h3>')
      );
    }
  });
}

function getJSON(url, callback) {
  var request = new XMLHttpRequest();
  request.open("GET", url);

  request.onload = function() {
    if (request.status === 200) {
      callback(JSON.parse(request.responseText));
    } else {
      console.error("Error loading " + url + ": " + request.status);
    }
  };

  request.onerror = function() {
    console.error("Connection error: " + request.status);
  };

  request.send();
}

function htmlToElement(html) {
  var template = document.createElement("template");
  html = html.trim();
  template.innerHTML = html;
  return template.content.firstChild;
}

// Setup search input listener
if (searchInput) {
  searchInput.addEventListener("keyup", function() {
    if (timerUserInput) {
      clearTimeout(timerUserInput);
    }

    timerUserInput = setTimeout(function() {
      search(searchInput.value.trim());
    }, 500);
  });
}
