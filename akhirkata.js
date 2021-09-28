var text = 'If you think this blog article is useful, {entertain|occupy|keep busy|interest|absorb|engross|keep amused|make laugh|make smile|charm|please|divert} {keep|hold|retain|withhold|preserve|maintain|sustain|support} me by sharing this website article {proclaim|make known|publicize|broadcast|declare|say|pronounce|state|reveal|name|post|herald|publish|read out} to your social media accounts such as Facebook, Instagram and others or you can bookmark this website page {following|subsequent to|behind|later than|past|gone|once|when|as soon as|considering|taking into account|with|bearing in mind|taking into consideration|afterward|subsequently|later|next|in the manner of|in imitation of|similar to|like|in the same way as} this title. use Ctrl + D for a laptop {following|subsequent to|behind|later than|past|gone|once|when|as soon as|considering|taking into account|with|bearing in mind|taking into consideration|afterward|subsequently|later|next|in the manner of|in imitation of|similar to|like|in the same way as} a windows {lively|vigorous|energetic|full of life|on the go|full of zip|dynamic|in force|functioning|effective|in action|operating|operational|functional|working|working|practicing|involved|committed|enthusiastic|keen} system or Command + D for a computer {following|subsequent to|behind|later than|past|gone|once|when|as soon as|considering|taking into account|with|bearing in mind|taking into consideration|afterward|subsequently|later|next|in the manner of|in imitation of|similar to|like|in the same way as} a Mac OS {lively|vigorous|energetic|full of life|on the go|full of zip|dynamic|in force|functioning|effective|in action|operating|operational|functional|working|working|practicing|involved|committed|enthusiastic|keen} system. If you are using a cellphone, you can {plus|in addition to|as well as|with|along with|furthermore|moreover|also|then|after that|afterward|next|as a consequence} use the drawer menu from the browser you are using. Whether its Windows, Mac, iOs or Android {lively|vigorous|energetic|full of life|on the go|full of zip|dynamic|in force|functioning|effective|in action|operating|operational|functional|working|working|practicing|involved|committed|enthusiastic|keen} system, you will {yet|still|nevertheless} be {skillful|nimble|practiced|able|clever|dexterous|adept|competent|accomplished|skilled} to bookmark this blog page.';

function preg_quote(str, delimiter) {
    return (str + '').replace(new RegExp('[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\' + (delimiter || '') + '-]', 'g'), '\\$&');
}

function spin(text) {
    var matches = text.match(/{[^<]+/gi);
    if (matches === null) {
        return text;
    }
    if (matches[0].indexOf('{') != -1) {
        matches[0] = matches[0].substr(matches[0].indexOf('{') + 1);
    }
    if (matches[0].indexOf('}') != -1) {
        matches[0] = matches[0].substr(0, matches[0].indexOf('}'));
    }
    var parts = matches[0].split('|');
    var t = preg_quote(matches[0]);
    e_v = new RegExp('{' + t + '}', 'g');
    text = text.replace(e_v, parts[Math.floor(Math.random()*parts.length)]);
    return spin(text);
}

var akhirkata = spin(text);
