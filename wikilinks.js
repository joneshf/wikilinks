/**
 * wikilinks.js
 * Version 1.1
 * 
 * Copyright 2012 Hardy Jones III
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * Injects a link tag into each title on the page.
 * 
 * @param className the element class to inject the link into.
 *
 * This is all kind of dirty,
 * and I'm sure there's a better way to do it.
 */
function parseSections (className) {
  // Get all the "editsection" tags,
  // since they hold the [sub]section titles.
  var sections = document.getElementsByClassName(className);
  // Template for what we're building.
  // Though this should probably be done with a DOM element.
  var first = '[<a href="#';
  var middle = '" title="Link section:';
  var last = '">link</a>]';

  for (var i = 0, len = sections.length; i < len; i++) {
    // Get the next span, which has some good info in it.
    // Concat all that stuff together and insert it into the parent.
    var newSpan = document.createElement('span');
    var curSpan = sections[i];
    // TODO: This needs to have it's own css class.
    //       Also, that string cat is pretty ugly...
    newSpan.setAttribute('class', 'editsection');
    newSpan.innerHTML = first + curSpan.id + middle + curSpan.innerText + last;
    curSpan.parentElement.appendChild(newSpan);
  }
};

// Inject into sections.
parseSections('mw-headline');
