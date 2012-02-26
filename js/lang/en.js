/**
 * BibleForge
 *
 * @date    10-30-08
 * @version alpha (α)
 * @link    http://BibleForge.com
 * @license GNU Affero General Public License 3.0 (AGPL-3.0)
 * @author  BibleForge <info@bibleforge.com>
 */

/// Declare globals for JSLint.
/*global window, BF */

/// Set JSLint options.
/*jslint continue: true, regexp: true, indent: 4, white: true */

/// Indicate all object properties used.  JSLint checks this list for misspellings.
/*properties
    ABBREVIATED, ACCUSATIVE, ACTIVE, ADJECTIVE, ADVERB, AEOLIC, 
    AMBIGUOUS_CORRELATIVE_INTERROGATIVE_PRONOUN, AMBIGUOUS_MIDDLE_PASSIVE, 
    AMBIGUOUS_MIDDLE_PASSIVE_DEPONENT, AORIST, APOCOPATED, ARAMAIC, ATTIC, 
    COMPARATIVE, CONDITIONAL, CONJUNCTION, CONTRACTED, CORRELATIVE_PRONOUN, 
    DATIVE, DEFINITE_ARTICLE, DEMONSTRATIVE_PRONOUN, DIVINE, FEMININE, 
    FIRST_FORM, FIRST_PERSON, FUTURE, GENITIVE, HEBREW, IMPERATIVE, 
    IMPERATIVE_SENSE_PARTICIPLE, IMPERFECT, IMPERSONAL_ACTIVE, IMPLIED, 
    INDECLINABLE, INDEFINITE_PRONOUN, INDICATIVE, INFINITIVE, INJECTIVE, 
    INTERROGATIVE, INTERROGATIVE_PRONOUN, IRREGULAR, LETTER, MASCULINE, MIDDLE, 
    MIDDLE_DEPONENT, MIDDLE_SIGNIFICANCE, NEGATIVE, NEUTER, NOMINATIVE, 
    NORMAL_NOUN, NOUN, NO_TENSE_STATED, NO_VOICE_STATED, NUMERICAL, OPTATIVE, 
    OTHER, PARTICIPLE, PARTICLE, PARTICLE_ATTACHED, PASSIVE, PASSIVE_DEPONENT, 
    PERFECT, PERSONAL_PRONOUN, PLUPERFECT, PLURAL, POSESSIVE_PRONOUN, 
    PREPOSITION, PRESENT, PRONOUN, PROPER_NOUN, RECIPROCAL_PRONOUN, RED, 
    REFLEXIVE_PRONOUN, RELATIVE_PRONOUN, SECOND_FORM, SECOND_PERSON, SINGULAR, 
    SUBJUNCTIVE, SUPERLATIVE, THIRD_PERSON, TRANSITIVE, VERB, VOCATIVE, about, 
    alism, aliti, alize, alli, anci, app_name, ation, ational, ative, ator, 
    biliti, bli, blog, books_long_main, books_long_posttitle, 
    books_long_pretitle, books_short, chapter, chapter_count, configure, 
    determine_reference, done, eli, en, enci, entli, exec, found_plural, 
    found_singular, ful, full_name, fulness, grammar_keywords, grammar_marker, 
    grammar_marker_len, grammar_separator, help, ical, icate, iciti, id, 
    in_paragraphs, indexOf, italics_explanation, iveness, iviti, ization, izer, 
    lang_id, langs, length, linked_to_orig, loaded, logi, ness, no_results1, 
    no_results2, ousli, ousness, prepare_highlighter, prepare_query, psalm, 
    query_button_alt, query_button_title, query_explanation, red_letters, 
    replace, self, short_name, slice, split, subscription, test, tional, title, 
    toLowerCase, view, wrench_title
*/

/**
 * Create the BibleForge language specific object for the English language.
 *
 * @note    The object that is created is used by main.js to preform language specific operations.
 * @return  Returns an object containing language specific functions and variables.
 */
BF.langs.en = (function ()
{
    "use strict";
    
    /// Return the language variables and functions.
    return {
        /// Incidate that the code has been downloaded and parsed.
        loaded: true,
        
        /// Indicate the language name so it can be distinguished later.
        full_name:  "English (KJV)",
        short_name: "KJV",
        id:         "en",
        lang_id:    0,
        
        linked_to_orig: true,
        
        /// Book names
        books_long_main:      ["", "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "Samuel", "Samuel", "The Kings", "The Kings", "Chronicles", "Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Songs", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "The Acts", "Romans", "Corinthians", "Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "Thessalonians", "Thessalonians", "Timothy", "Timothy", "Titus", "Philemon", "Hebrews", "James", "Peter", "Peter", "John", "John", "John", "Jude", "The Revelation"],
        books_long_posttitle: ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "of Jeremiah", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "of the Apostles", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "of Jesus Christ"],
        books_long_pretitle:  ["", "The First Book of Moses, called", "The Second Book of Moses, called", "The Third Book of Moses, called", "The Fourth Book of Moses, called", "The Fifth Book of Moses, called", "The Book of", "The Book of", "The Book of", "The First book of", "The Second book of", "The First book of", "The Second book of", "The First book of", "The Second book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Song of", "The Book of", "The Book of", "The Book of the", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Book of", "The Gospel According to", "The Gospel According to", "The Gospel According to", "The Gospel According to", "", "The Epistle of Paul to the", "The First Epistle of Paul to the", "The Second Epistle of Paul to the", "The Epistle of Paul to the", "The Epistle of Paul to the", "The Epistle of Paul to the", "The Epistle of Paul to the", "The First Epistle of Paul to the", "The Second Epistle of Paul to the", "The First Epistle of Paul to", "The Second Epistle of Paul to", "The Epistle of Paul to", "The Epistle of Paul to", "The Epistle of Paul to the", "The Epistle of", "The First Epistle of", "The Second Epistle of", "The First Epistle of", "The Second Epistle of", "The Third Epistle of", "The Epistle of", ""],
        books_short:          ["", "Genesis", "Exodus", "Leviticus", "Numbers", "Deuteronomy", "Joshua", "Judges", "Ruth", "1 Samuel", "2 Samuel", "1 Kings", "2 Kings", "1 Chronicles", "2 Chronicles", "Ezra", "Nehemiah", "Esther", "Job", "Psalms", "Proverbs", "Ecclesiastes", "Song of Songs", "Isaiah", "Jeremiah", "Lamentations", "Ezekiel", "Daniel", "Hosea", "Joel", "Amos", "Obadiah", "Jonah", "Micah", "Nahum", "Habakkuk", "Zephaniah", "Haggai", "Zechariah", "Malachi", "Matthew", "Mark", "Luke", "John", "Acts", "Romans", "1 Corinthians", "2 Corinthians", "Galatians", "Ephesians", "Philippians", "Colossians", "1 Thessalonians", "2 Thessalonians", "1 Timothy", "2 Timothy", "Titus", "Philemon", "Hebrews", "James", "1 Peter", "2 Peter", "1 John", "2 John", "3 John", "Jude", "Revelation"],
        
        /// The number of chapters in each book of the Bible.
        ///NOTE: Genesis is index 1 (not 0).
        chapter_count: [0, 50, 40, 27, 36, 34, 24, 21, 4, 31, 24, 22, 25, 29, 36, 10, 13, 10, 42, 150, 31, 12, 8, 66, 52, 5, 48, 12, 14, 3, 9, 1, 4, 7, 3, 3, 3, 2, 14, 4, 28, 16, 24, 21, 28, 16, 16, 13, 6, 6, 4, 4, 5, 3, 6, 4, 3, 1, 13, 5, 5, 3, 5, 1, 1, 1, 22],
        
        ///TODO: Determine if texts should be categorized.
        /// Miscellaneous Text
        about:             "About",                                               /// Context menu item
        app_name:          "BibleForge",                                          /// The name of the application
        blog:              "Blog",                                                /// Context menu item
        chapter:           "Chapter",                                             /// Chapter headings
        configure:         "Configure",                                           /// Context menu item
        done:              "Done",                                                /// The button that closes panels
        found_plural:      " verses found for ",                                  /// On the info bar when searching (multiple results)
        found_singular:    " verse found for ",                                   /// On the info bar when searching (one result)
        help:              "Help",                                                /// Context menu item
        ///NOTE: This key must be the same as the value in the settings.
        in_paragraphs:     "Paragraphs",                                          /// In the View configuration panel
        ///FIXME: Not all italic words are implied; some are questionable.
        italics_explanation: "This word is implied by context or required in order to translate properly; it was not translated directly from a word in the original languages.", /// When clicking on an italic word
        no_results1:       "Your search\u200A\u2014\u200A",                       /// Displayed when preforming a search that returns no results (before the search terms).
        no_results2:       "\u200A\u2014\u200Adid not return any results.",       /// Displayed when preforming a search that returns no results (after the search terms).
        psalm:             "Psalm",                                               /// The title of chapters in the book of Psalms
        query_explanation: 'Keyword or Reference: "God so loved" or Romans 3:23', /// In a blank query input box before a search has been preformed
        query_button_title:"Click here (or press Enter)",                         /// The text displayed when hovering over the magnifying glass (query button).
        query_button_alt:  "Go",                                                  /// The text to display for the magnifying glass (query button) if images are disabled.
        ///NOTE: This key must be the same as the value in the settings.
        red_letters:       "Red Letters",                                         /// In the View configuration panel
        subscription:      "subscription",                                        /// Used instead of 255 for subscripts to Paul's epistles
        title:             "title",                                               /// Used instead of 0 for Psalm title verse references
        view:              "View",                                                /// The title of a configuration panel
        ///TODO: Determine if the app_name should be dynamically appended to the string below or if it should be done in the build system
        wrench_title:      "Customize and Configure BibleForge",                  /// The text displayed when hovering over the wrench menu
        
        /// Grammatical Variables
        /// Grammatical search format:  WORD grammar_marker ATTRIBUTE_1 grammar_separator ATTRIBUTE_2 grammar_separator ... ATTRIBUTE_N
        /// Grammatical search example: love AS VERB, THIRD_PERSON
        /// The keyword that indicates a grammatical search.
        ///NOTE: Created in the Forge via grammar_constants_parser.php on 04-05-2010 from Grammar Constants.txt.
        grammar_keywords:   {IMPLIED: "[1,1]", DIVINE: "[2,1]", RED: "[3,1]", NOUN: "[4,1]", VERB: "[4,2]", ADJECTIVE: "[4,3]", ADVERB: "[4,4]", PRONOUN: "[4,5]", DEFINITE_ARTICLE: "[4,6]", CONJUNCTION: "[4,7]", CONDITIONAL: "[4,8]", PARTICLE: "[4,9]", PREPOSITION: "[4,10]", INJECTIVE: "[4,11]", HEBREW: "[4,12]", ARAMAIC: "[4,13]", SINGULAR: "[5,1]", PLURAL: "[5,2]", FIRST_PERSON: "[6,1]", SECOND_PERSON: "[6,2]", THIRD_PERSON: "[6,3]", PRESENT: "[7,1]", IMPERFECT: "[7,2]", FUTURE: "[7,3]", AORIST: "[7,4]", PERFECT: "[7,5]", PLUPERFECT: "[7,6]", NO_TENSE_STATED: "[7,99]", ACTIVE: "[8,1]", MIDDLE: "[8,2]", PASSIVE: "[8,3]", MIDDLE_DEPONENT: "[8,4]", PASSIVE_DEPONENT: "[8,5]", IMPERSONAL_ACTIVE: "[8,6]", AMBIGUOUS_MIDDLE_PASSIVE: "[8,77]", AMBIGUOUS_MIDDLE_PASSIVE_DEPONENT: "[8,88]", NO_VOICE_STATED: "[8,99]", INDICATIVE: "[9,1]", SUBJUNCTIVE: "[9,2]", IMPERATIVE: "[9,3]", INFINITIVE: "[9,4]", OPTATIVE: "[9,5]", PARTICIPLE: "[9,6]", IMPERATIVE_SENSE_PARTICIPLE: "[9,7]", MASCULINE: "[10,1]", FEMININE: "[10,2]", NEUTER: "[10,3]", NOMINATIVE: "[11,1]", GENITIVE: "[11,2]", ACCUSATIVE: "[11,3]", DATIVE: "[11,4]", VOCATIVE: "[11,5]", PERSONAL_PRONOUN: "[12,1]", RELATIVE_PRONOUN: "[12,2]", RECIPROCAL_PRONOUN: "[12,3]", DEMONSTRATIVE_PRONOUN: "[12,4]", CORRELATIVE_PRONOUN: "[12,5]", INTERROGATIVE_PRONOUN: "[12,6]", INDEFINITE_PRONOUN: "[12,7]", REFLEXIVE_PRONOUN: "[12,8]", POSESSIVE_PRONOUN: "[12,9]", AMBIGUOUS_CORRELATIVE_INTERROGATIVE_PRONOUN: "[12,10]", COMPARATIVE: "[13,1]", SUPERLATIVE: "[13,2]", INDECLINABLE: "[14,1]", NUMERICAL: "[15,1]", NORMAL_NOUN: "[16,1]", PROPER_NOUN: "[16,2]", LETTER: "[16,3]", OTHER: "[16,4]", ABBREVIATED: "[17,1]", CONTRACTED: "[17,2]", APOCOPATED: "[17,3]", IRREGULAR: "[17,4]", ATTIC: "[18,1]", AEOLIC: "[18,2]", TRANSITIVE: "[19,1]", FIRST_FORM: "[20,1]", SECOND_FORM: "[20,2]", INTERROGATIVE: "[21,1]", NEGATIVE: "[21,2]", PARTICLE_ATTACHED: "[21,3]", MIDDLE_SIGNIFICANCE: "[21,4]"},
        grammar_marker:     " AS ",
        grammar_marker_len: 4,   /// The length of grammar_marker.
        grammar_separator:  ",", /// The punctuation that separates two attributes.
        
        prepare_highlighter: (function ()
        {
            /**
             * Create the stem_word closure
             *
             * @return A function with variables inside the closure.
             * @note   This function is executed immediately.
             */
            var stem_word = (function ()
            {
                /// Create stem arrays for stem_word().
                var step2list = {ational: "ate", tional: "tion", enci: "ence", anci: "ance", izer: "ize", bli: "ble", alli: "al", entli: "ent", eli: "e", ousli: "ous", ization: "ize", ation: "ate", ator: "ate", alism: "al", iveness: "ive", fulness: "ful", ousness: "ous", aliti: "al", iviti: "ive", biliti: "ble", logi: "log"},
                    step3list = {icate: "ic", ative: "", alize: "al", iciti: "ic", ical: "ic", ful: "", ness: "", self: ""},
                    
                    ///TODO: Determine if there is a faster way to do this.  E.g., using an in_array() or isset() function.
                    /// Words to ignore that are already the root word but don't look like it.
                    stop_words_re = /^(?:th[iu]s|h[ai]s|was|yes|succeed|proceed|e(?:arly|xceed)|only|news)$/i;
                
                /**
                 * Convert an English word to its root form.
                 *
                 * Based on the Porter stemmer in Javascript.
                 * Improved for BibleForge.
                 *
                 * @example root_word = stem_word("loving"); /// Returns "lov[ei]"
                 * @param   w (string) Word to stem.
                 * @return  Root word string.
                 * @todo    Update this (and Sphinx) to the porter2 algorithm.
                 * @note    Called by prepare_highlighter() in js/main.js.
                 * @link    http://snowball.tartarus.org/algorithms/english/stemmer.html
                 * @link    http://www.tartarus.org/~martin/PorterStemmer
                 * @todo    Document stem_word() better: give examples (from the KJV if possible) and reasonings for each regular expression, etc.
                 * @todo    Review stem_word() for optimizations: avoid regex when possible.
                 */
                return function stem_word(w)
                {
                    var fp,
                        last_letter,
                        re,
                        re2,
                        re3,
                        re4,
                        stem,
                        suffix;
                    
                    /// Some quick checking to see if we even need to continue.
                    if (w.length < 3) {
                        return w;
                    }
                    
                    if (stop_words_re.test(w)) {
                        return w;
                    }
                    
                    /// ***********
                    /// * Step 0a *
                    /// ***********
                    ///
                    /// Search for the longest among the suffixes
                    ///     '
                    ///     's
                    ///     's'
                    /// and remove if found.
                                        
                    w = w.replace(/'(?:s'?)?$/, "");
                    
                    /// ***********
                    /// * Step 0b *
                    /// ***********
                    ///
                    /// Convert y's at the beginning of a word or after a vowel to upper case to indicate that they are to be treated as consonants.
                    /// They are converted back to lower case near the end.
                    
                    w = w.replace(/(?:^y|([aeiouy])y)/g, "$1Y");
                    
                    /// ***********
                    /// * Step 1a *
                    /// ***********
                    ///
                    /// Find the longest suffix and preform the following:
                    /// Replace suffixes: sses             => ss     (witnesses => witness)
                    ///                   ??ied+ || ??ies* => ??i    (cried     => cri,      cries => cri)
                    ///                   ?ied+  || ?ies*  => ??ie   (tied      => tie,      ties  => tie)
                    ///                   {V}{C}s          => {V}{C} (gaps      => gap)
                    /// Ignore suffixes:  us+ && ss                  (grievous  => grievous, pass  => pass)
                    re  = /^(.+?)(ss|i)es$/;
                    re2 = /^(.+?)([^s])s$/;
                    
                    if (re.test(w)) {
                        w = w.replace(re,  "$1$2");
                    } else if (re2.test(w)) {
                        w = w.replace(re2, "$1$2");
                    }
                    
                    /// ***********
                    /// * Step 1b *
                    /// ***********
                    ///
                    /// Replace "eed" with "ee" if after the first non-vowel following a vowel, or the end of the word if there is no such non-vowel (aka R1).
                    ///     agreed => agree
                    /// Delete
                    ///     ed
                    ///     edly
                    ///     ing
                    ///     ingly
                    ///     eth
                    ///     est
                    /// if the preceding word part contains a vowel, and after the deletion:
                    /// if the word ends with "at," "bl," or "iz," add "e" (so luxuriat => luxuriate), or
                    /// if the word ends with a double remove the last letter (so hopp => hop), or
                    /// if the word is short, add "e" (so hop => hope)
                    
                    ///TODO: Also stem "eedly" (porter2).
                    re  = /^(.+?)eed$/;
                    /// "Present-day" English: re2 = /^(.+?)(ingly|edly|ed|ing|ly)$/;
                    re2 = /^(.+?)(ing(?:ly)?|e(?:d(?:ly)?|st|th)|ly)$/; /// Early Modern English fix
                    
                    if (re.test(w)) {
                        fp = re.exec(w);
                        if (/^(?:[^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/.test(fp[1])) {
                            w.slice(0, -1);
                        }
                    } else if (re2.test(w)) {
                        fp   = re2.exec(w);
                        stem = fp[1];
                        if (/^(?:[^aeiou][^aeiouy]*)?[aeiouy]/.test(stem)) {
                            w   = stem;
                            re2 = /(?:at|bl|iz)$/;
                            re3 = /([^aeiouylsz])\1$/; /// Look for repeating characters.
                            re4 = /^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/;
                            if (re2.test(w)) {
                                /// TODO: Determine why if (re2.test(w)) and else if (re4.test(w)) should not be merged to the same line since they have the same code following.
                                w += "e";
                            } else if (re3.test(w)) {
                                w = w.slice(0, -1);
                            } else if (re4.test(w)) {
                                w += "e";
                            }
                        }
                    }
                    
                    /// ***********
                    /// * Step 1c *
                    /// ***********
                    ///
                    /// Replace y suffix by i if preceded by a non-vowel which is not the first letter of the word.
                    ///     cry => cri
                    ///     by  => by
                    ///     say => say
                    
                    re = /^(.+?)y$/;
                    if (re.test(w)) {
                        fp   = re.exec(w);
                        stem = fp[1];
                        if (/^(?:[^aeiou][^aeiouy]*)?[aeiouy]/.test(stem)) {
                            w = stem + "i";
                        }
                    }
                    
                    /// **********
                    /// * Step 2 *
                    /// **********
                    ///
                    /// Replace stems in step2list if after the first non-vowel following a vowel, or the end of the word if there is no such non-vowel (aka R1).
                    
                    re = /^(.+?)(a(?:t(?:ion(?:al)?|or)|nci|l(?:li|i(?:sm|ti)))|tional|e(?:n(?:ci|til)|li)|i(?:z(?:er|ation)|v(?:eness|iti))|b(?:li|iliti)|ous(?:li|ness)|fulness|logi)$/;
                    if (re.test(w)) {
                        fp     = re.exec(w);
                        stem   = fp[1];
                        suffix = fp[2];
                        if (/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/.test(stem)) {
                            w = stem + step2list[suffix];
                        }
                    }
                    
                    /// **********
                    /// * Step 3 *
                    /// **********
                    ///
                    /// Replace stems in step3list if after the first non-vowel following a vowel, or the end of the word if there is no such non-vowel (aka R1).
                    ///NOTE: "ative" should be removed if after the first non-vowel following a vowel in R1 or the end of the word, if there is no such non-vowel (aka R2).
                    
                    re = /^(.+?)(ic(?:a(?:te|l)|iti)|a(?:tive|lize)|ful|ness|self)$/;
                    if (re.test(w)) {
                        fp     = re.exec(w);
                        stem   = fp[1];
                        suffix = fp[2];
                        if (/^([^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*/.test(stem)) {
                            w = stem + step3list[suffix];
                        }
                    }
                    
                    /// **********
                    /// * Step 4 *
                    /// **********
                    ///
                    /// Essentially, delete certain suffixes if found in after the first non-vowel following a vowel in R1 or the end of the word, if there is no such non-vowel (aka R2).
                    
                    re  = /^(.+?)(?:a(?:l|n(?:ce|t)|te|ble)|e(?:n(?:ce|t)|r|ment)|i(?:c|ble|sm|ti|ve|ze)|ment|ous?)$/;
                    re2 = /^(.+?)([st])ion$/;
                    
                    if (re.test(w)) {
                        fp   = re.exec(w);
                        stem = fp[1];
                        if (/^(?:[^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/.test(stem)) {
                            w = stem;
                        }
                    } else if (re2.test(w)) {
                        fp   = re2.exec(w);
                        stem = fp[1] + fp[2];
                        if (/^(?:[^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/.test(stem)) {
                            w = stem;
                        }
                    }
                    
                    /// **********
                    /// * Step 5 *
                    /// **********
                    ///
                    /// Delete "e" if in R2, or in R1 and not preceded by a short syllable.
                    /// Delete "l" if in R2 and preceded by l:
                    ///     tell => tel
                    
                    re = /^(.+?)e$/;
                    if (re.test(w)) {
                        fp   = re.exec(w);
                        stem = fp[1];
                        re   = /^(?:[^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/;
                        re2  = /^(?:[^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*(?:[aeiouy][aeiou]*)?$/;
                        re3  = /^[^aeiou][^aeiouy]*[aeiouy][^aeiouwxy]$/;
                        
                        if (re.test(stem) || (re2.test(stem) && !(re3.test(stem)))) {
                            w = stem;
                        }
                    } else {
                        if (/ll$/.test(w) && (/^(?:[^aeiou][^aeiouy]*)?[aeiouy][aeiou]*[^aeiou][^aeiouy]*[aeiouy][aeiou]*[^aeiou][^aeiouy]*/.test(w))) {
                            w = w.slice(0, -1);
                        }
                    }
                    
                    w = w.toLowerCase();
                    
                    last_letter = w.slice(-1);
                    
                    if (last_letter === "y" || last_letter === "i") {
                        w = w.slice(0, w.length - 1) + "[yi]";
                    } else if (last_letter === "e") {
                        w = w.slice(0, w.length - 1) + "[ei]";
                    }
                    
                    return w;
                };
            }());
            
            
            /**
             * Prepare the search terms for the highlighter.
             *
             * Removes punctuation, words which should not be found in the search results, duplicate words, and converts all words to lower case
             * so that the highlighter can parse the words properly.
             *
             * @example filter_terms_for_highlighter('this one, -that one -"none of these" -"or these ones"~1 "but, these?"'); /// Returns ["this", "one", "but", "these"].
             * @param   search_terms (string) The terms to be filtered.
             * @return  An array of filtered words.
             * @note    Called by prepare_highlighter().
             * @todo    Determine if this should be moved out of the language specific file (and maybe just use some language specific variables).
             */
            function filter_terms_for_highlighter(search_terms)
            {
                var arr_len,
                    final_search_arr    = [],
                    i,
                    initial_search_arr,
                    j,
                    new_arr_len         = 0;
                
                /// Remove punctuation and break up the query string into individual parts to filter out duplicates.
                ///NOTE: (?:^|\s)- makes sure not to filter out hyphenated words by ensuring that a hyphen must occur at the beginning or before a space to be counted as a NOT operator.
                ///NOTE: (?:"[^"]*"?|[^\s]*) matches a phrase starting with a double quote (") or a single word.
                ///NOTE: [~\/]\d* removes characters used for Sphinx query syntax.  I.e., proximity searches ("this that"~10) and quorum matching ("at least three of these"/3).
                ///NOTE: -\B removes trailing hyphens.  (This might be unnecessary.)
                ///NOTE: '(?!s\b) removes that are not followed by an "s" and only an "s."
                initial_search_arr = search_terms.replace(/(?:(?:^|\s)-(?:"[^"]*"?|[^\s]*)|[~\/]\d*|[",.:?!;&|\)\(\]\[\/\\`{}<$\^+]|-\B|'(?!s\b))/g, "").toLowerCase().split(" ");
                
                arr_len = initial_search_arr.length;
                
                /// Filter out duplicates (i.e., PHP's array_unique()).
first_loop:     for (i = 0; i < arr_len; i += 1) {
                    /// Skip empty strings.
                    if (initial_search_arr[i] !== "") {
                        for (j = 0; j < new_arr_len; j += 1) {
                            if (final_search_arr[j] === initial_search_arr[i]) {
                                /// This words already exists; jump to the first loop and get the next word.
                                ///NOTE: This would be the same as "continue 2" in PHP.
                                continue first_loop;
                            }
                        }
                        final_search_arr[new_arr_len] = initial_search_arr[i];
                        new_arr_len += 1;
                    }
                }
                
                return final_search_arr;
            }
            
            /**
             * Prepare search terms for highlighting.
             *
             * Create regex array to search through the verses that will soon be returned by the server.
             *
             * @example BF.lang.prepare_highlighter(q_obj.value);
             * @example BF.lang.prepare_highlighter("search terms");
             * @param   search_terms (string) The terms to look for.
             * @return  An array of regular expressions.
             * @note    Called by run_new_query().
             */
            return function prepare_highlighter(search_terms)
            {
                var add_morph_regex,
                    count           = 0,
                    highlight_regex = [],
                    i               = 0,
                    j,
                    len_before,
                    len_after,
                    term,
                    stemmed_arr     = [],
                    search_terms_arr,
                    search_terms_arr_len,
                    stemmed_word;
                
                search_terms_arr     = filter_terms_for_highlighter(search_terms);
                search_terms_arr_len = search_terms_arr.length;
                
                ///TODO: Determine if a normal FOR loop would be better.
first_loop:     while (i < search_terms_arr_len) {
                    term       = search_terms_arr[i];
                    len_before = term.length;
                    i += 1;
                    
                    /// Possibly fix special/unique words that the stemmer won't stem correctly.
                    switch (term) {
                    case "shalt":
                    case "shall":
                        stemmed_word = "shal[lt]";
                        add_morph_regex = false;
                        break;
                    case "wilt":
                    case "will":
                        stemmed_word = "wil[lt]";
                        add_morph_regex = false;
                        break;
                    ///NOTE: Could also include "haddest," but that is not found in the current English version.
                    case "had":
                    case "hadst":
                    case "has":
                    case "hast":
                    case "hath":
                    case "have":
                    case "having":
                        stemmed_word = "ha(?:d(?:st)?|st?|th|v(?:e|ing))";
                        add_morph_regex = false;
                        break;
                    ///NOTE: "ate" must be here because the stem form is "at," which is ambiguous.
                    ///NOTE: See "eat" and "eaten" below also.
                    case "ate":
                        stemmed_word = "(?:ate|eat)";
                        add_morph_regex = true;
                        break;
                    ///NOTE: This is to make "comely" highlight "comeliness" and not "come."
                    case "comely":
                        stemmed_word = "comel[yi]";
                        add_morph_regex = true;
                        break;
                    ///NOTE: This is to highlight "find," "findest," "findeth," and "found" but not "foundation," "founded," or "founder."
                    ///NOTE: See "find" and "found" below also.
                    case "found":
                        stemmed_word = "f(?:ind(?:e(?:st|th)|ing)?|ound)";
                        add_morph_regex = false;
                        break;
                    case "ye":
                    case "you":
                        stemmed_word = "y(?:e|ou)";
                        add_morph_regex = false;
                        break;
                    /// Prevent words with no other form having the morphological regex added to the stem.
                    case "the":
                    case "for":
                    case "not":
                    /// Because "flies" always refers to the insect (not the verb) and "fly" is always a verb, prevent "flies" from being stemmed.
                    ///NOTE: See "fl[yi]" below also.
                    case "flies":
                    /// Because "goings" is a noun, it should not be stemmed to "go."
                    ///NOTE: See "go" below also.
                    case "goings":
                        stemmed_word = term;
                        add_morph_regex = false;
                        break;
                    
                    /// Try stemming the word and then checking for strong words.
                    default:
                        /// Does the word contain a wildcard symbol (*)?
                        if (term.indexOf("*") !== -1) {
                            /// Don't stem; change it to a regex compatible form.
                            ///NOTE: Word breaks are found by looking for tag openings (<) or closings (>).
                            stemmed_word = term.replace(/\*/g, "[^<>]*");
                            add_morph_regex = false;
                        } else {
                            /// A normal word without a wildcard gets stemmed.
                            stemmed_word = stem_word(term);
                            add_morph_regex = true;
                            
                            /// Possibly fix strong words with proper morphological regex.
                            switch (stemmed_word) {
                            case "abid":
                            case "abod":
                                stemmed_word = "ab[io]d[ei]";
                                break;
                            case "aris":
                            case "arisen":
                            case "aros":
                                stemmed_word = "ar[io]s(?:[ei]|en)";
                                break;
                            case "awak":
                            case "awaken":
                            case "awok":
                                stemmed_word = "aw[ao]k(?:en)?";
                                break;
                            case "befal":
                            case "befallen":
                            case "befel":
                                stemmed_word = "b[ae]fell?(?:en)?";
                                break;
                            case "beheld":
                            case "behold":
                                stemmed_word = "beh[eo]ld";
                                break;
                            case "beseech":
                            case "besought":
                                stemmed_word = "bes(?:eech|ought)";
                                break;
                            case "becam":
                            case "becom":
                                stemmed_word = "bec[ao]m";
                                break;
                            case "began":
                            case "begin":
                            case "begun":
                                stemmed_word = "beg[aiu]n";
                                break;
                            case "beget":
                            case "begot":
                            case "begotten":
                                stemmed_word = "beg[eo]tt?(?:en)?";
                                break;
                            case "bend":
                            case "bent":
                            case "begotten":
                                stemmed_word = "ben[dt]t?(?:en)?";
                                break;
                            case "bad[ei]":
                            case "bid":
                            case "bidden":
                                stemmed_word = "b(?:ad[ei]|id(?:den)?)";
                                break;
                            case "bind":
                            case "bound":
                                stemmed_word = "b(?:i|ou)nd";
                                break;
                            case "bit":
                            case "bit[ei]":
                            case "bitten":
                                stemmed_word = "bit(?:[ei]|ten)?";
                                break;
                            case "blew":
                            case "blow":
                            case "blown":
                                stemmed_word = "bl[eo]wn?";
                                break;
                            case "bred":
                            case "br[ei]":
                                stemmed_word = "bree?d";
                                break;
                            case "brethren":
                            case "brother":
                                stemmed_word = "br[eo]the?r(?:en)?";
                                break;
                            case "brak[ei]":
                            case "brok[ei]":
                            case "broken":
                                stemmed_word = "br[ao]k[ei](?:en)?";
                                break;
                            case "bring":
                            case "brought":
                            case "brung":
                                stemmed_word = "br(?:ing|ought|ung)";
                                break;
                            case "build":
                            case "built":
                            case "buildedst":
                                stemmed_word = "buil[dt](?:edst)?";
                                break;
                            case "burnt":
                            case "burn":
                                stemmed_word = "burnt?";
                                break;
                            case "bought":
                            case "bu[yi]":
                                stemmed_word = "b(?:uy|ought)";
                                break;
                            case "catch":
                            case "caught":
                                stemmed_word = "ca(?:tch|ught)";
                                break;
                            case "cam[ei]":
                            case "com[ei]":
                                /// The negative look ahead (?!l) is to prevent highlighting "comeliness."
                                stemmed_word = "c[ao]m(?:i|e(?!l))";
                                break;
                            case "can":
                            case "canst":
                            case "could":
                                /// The negative look ahead (?!e) is to prevent highlighting "cane."
                                stemmed_word = "c(?:an(?:st)?(?!e)|ould)";
                                break;
                            case "child":
                            case "children":
                                stemmed_word = "child(?:ren)?";
                                break;
                            case "choos":
                            case "chos[ei]":
                            case "chosen":
                                stemmed_word = "cho(?:s(?:en?|i)|ose)";
                                break;
                            case "creep":
                            case "crept":
                                stemmed_word = "cre(?:ep|pt)";
                                break;
                            case "deal":
                            case "dealt":
                                stemmed_word = "dealt?";
                                break;
                            case "did":
                            case "didst":
                            case "do":
                            case "do[ei]":
                            case "don[ei]":
                            case "dost":
                            case "doth":
                                stemmed_word = "d(?:o(?:est?|ne|st|th)?|id(?:st)?)";
                                /// Since this word is so short, it needs special regex to prevent false positives, so do not add additional morphological regex.
                                add_morph_regex = false;
                                break;
                            case "draw":
                            case "drawn":
                            case "drew":
                                stemmed_word = "dr[ae]wn?";
                                break;
                            case "driv[ei]":
                            case "driven":
                            case "drov[ei]":
                                stemmed_word = "dr[oi]v[ei]n?";
                                break;
                            case "drank":
                            case "drink":
                            case "drunk":
                                stemmed_word = "dr[aiu]nk";
                                break;
                            case "dig":
                            case "dug":
                                stemmed_word = "d[iu]g";
                                break;
                            case "dwell":
                            case "dwelt":
                                /// The negative look ahead (?!i) is to prevent highlighting "dwelling," "dwellings," "dwellingplace," and "dwellers" but allow for "dwelled."
                                ///NOTE: "dwelling" is primarily used as a noun.
                                stemmed_word = "dwel[lt](?!i)";
                                break;
                            case "di[ei]":
                            case "d[yi]":
                                stemmed_word = "d(?:ie(?:d|th|st)?|ying)";
                                /// Since this word is so short, it needs special regex to prevent false positives, so do not add additional morphological regex.
                                add_morph_regex = false;
                                break;
                            ///NOTE: See "ate" above also.
                            case "eat":
                            case "eaten":
                                stemmed_word = "(?:ate|eat(?:en)?)";
                                break;
                            case "enquir":
                            case "enquir[yi]":
                                stemmed_word = "inquir[eiy]?";
                                break;
                            case "fall":
                            case "fallen":
                            case "fell":
                                stemmed_word = "f[ae]ll(?:en)?";
                                break;
                            case "fed":
                            case "feed":
                                stemmed_word = "fee?d";
                                break;
                            case "feet":
                            case "foot":
                                stemmed_word = "f(?:ee|oo)t";
                                /// Since there are no other forms, there is no need to add additional morphological regex.
                                add_morph_regex = false;
                                break;
                            case "feel":
                            case "felt":
                                stemmed_word = "fe(?:el|lt)";
                                break;
                            case "fight":
                            case "fought":
                                stemmed_word = "f(?:i|ou)ght";
                                break;
                            ///NOTE: This is to highlight "find," "findest," "findeth," and "found" but not "founded" or "foundest."
                            ///NOTE: See "found" above (which is a variant of this word) and "found" below (which is a different word).
                            case "find":
                                stemmed_word = "f(?:ind(?:e(?:st|th)|ing)?|ound)";
                                add_morph_regex = false;
                                break;
                            ///NOTE: This is actually used to match "founded" and "foundest."
                            ///      Other morphological variants that a user searches for (such as "foundeth") will also correctly use this regex.
                            ///NOTE: See "found" and "find" above (which match forms of another word).
                            case "found":
                                stemmed_word = "founde";
                                add_morph_regex = false;
                                break;
                            case "fled":
                            case "flee":
                            case "fl[ei]":
                            case "fle[ei]":
                                stemmed_word = "fle[ed]";
                                break;
                            case "flew":
                            case "flown":
                            case "fl[yi]":
                                ///NOTE: See "flies" above also.
                                stemmed_word = "fl(?:ew|i|own?|y)";
                                break;
                            case "forbad":
                            case "forbid":
                            case "forbidden":
                                stemmed_word = "forb[ai]d(?:e|den)?";
                                break;
                            case "foreknew":
                            case "foreknow":
                            case "foreknown":
                                stemmed_word = "forekn[eo]w";
                                break;
                            case "foresaw":
                            case "foreseen":
                            case "fores[ei]":
                                stemmed_word = "fores(?:een?|aw)";
                                break;
                            case "foretel":
                            case "foretold":
                                stemmed_word = "foret(?:ell|old)";
                                break;
                            case "forget":
                            case "forgot":
                            case "forgotten":
                                stemmed_word = "forg[eo]tt?(?:en)?";
                                break;
                            case "forgav":
                            case "forgiv":
                            case "forgiven":
                                stemmed_word = "forg[ai]v[ei]n?";
                                break;
                            case "forsak":
                            case "forsaken":
                            case "forsook":
                                stemmed_word = "fors(?:a|oo)k[ei]n?";
                                break;
                            case "freez":
                            case "froz[ei]":
                            case "frozen":
                                ///NOTE: This word actually only occurs once (as "forzen").
                                stemmed_word = "fr(?:ee|o)z[ei]n?";
                                break;
                            case "gav[ei]":
                            case "giv[ei]":
                            case "given":
                                stemmed_word = "g[ai]v[ei]n?";
                                break;
                            ///NOTE: "gently" stems to "gent".
                            case "gent":
                            case "gentl":
                                stemmed_word = "gentl";
                                break;
                            ///NOTE: See "goings" above also.
                            case "go":
                            case "gon[ei]":
                            case "went":
                                stemmed_word = "(?:go(?:e(?:st|th)|ing|ne)?|went)";
                                /// Because this word is so small and unique, it is easier to white list all of the forms used.
                                add_morph_regex = false;
                                break;
                            case "get":
                            case "got":
                            case "gotten":
                                stemmed_word = "g[eo]tt?(?:en)?";
                                break;
                            case "graff":
                            case "graft":
                                stemmed_word = "graf[ft]";
                                break;
                            ///NOTE: "haste" is stemmed to "hast."
                            ///NOTE: "hast" is intercepted above, before stemming.
                            case "hast":
                            case "hasten":
                                stemmed_word = "hast[ei]n?";
                                break;
                            case "hear":
                            case "heard":
                                ///NOTE: The negative look ahead (?!t) prevents highlighting "hearth" but allows for other forms.
                                stemmed_word = "heard?(?!t)";
                                break;
                            ///NOTE: "hearkenedst" does not stem properly.
                            case "hearken":
                            case "hearkenedst":
                                stemmed_word = "hearken(?:edst)?";
                                break;
                            case "held":
                            case "hold":
                                ///NOTE: The word "holds" is used in the Bible only as a noun, such as "strong holds"; however, it is a common Present Day English form.
                                stemmed_word = "h[eo]ld";
                                break;
                            case "hew":
                            case "hewn":
                                stemmed_word = "hewn?";
                                break;
                            case "hid":
                            case "hid[ei]":
                            case "hidden":
                                ///NOTE: The negative look ahead (?!d(?:ek|a)) prevents highlighting "Hiddekel" and "Hiddai" but allows for "hidden."
                                stemmed_word = "hidd?(?:en)?";
                                break;
                            case "hang":
                            case "hung":
                                ///NOTE: "hanging" almost always refers to the noun; "hangings" always does.
                                stemmed_word = "h[au]ng";
                                break;
                            case "keep":
                            case "kept":
                                stemmed_word = "ke(?:ep|pt)";
                                break;
                            case "kneel":
                            case "knelt":
                                stemmed_word = "kne(?:el|lt)";
                                break;
                            case "knew":
                            case "know":
                            case "known":
                                stemmed_word = "kn[eo]wn?";
                                break;
                            case "laid":
                            case "la[yi]":
                                stemmed_word = "la(?:y|id?)";
                                break;
                            case "lad[ei]":
                            case "laden":
                                stemmed_word = "lad(?:en?|i)";
                                break;
                            case "lept":
                            case "leep":
                                stemmed_word = "le(?:ep|pt)";
                                break;
                            case "leav":
                            case "left":
                                stemmed_word = "le(?:av|ft)";
                                break;
                            case "seek":
                            case "sought":
                                stemmed_word = "s(?:eek|ought)";
                                break;
                            }
                        }
                    }
                    
                    /// Skip words that are the same after stemming or regex'ing (e.g., "joyful joy" becomes "joy joy").
                    for (j = 0; j < count; j += 1) {
                        if (stemmed_word === stemmed_arr[j]) {
                            ///NOTE: This is the same as "continue 2" in PHP.
                            continue first_loop;
                        }
                    }
                    
                    len_after = stemmed_word.length;
                    
                    stemmed_arr[count] = stemmed_word;
                    
                    ///NOTE:  [<-] finds either the beginning of the close tag (</a>) or a hyphen (-).
                    ///       The hyphen is to highlight hyphenated words that would otherwise be missed (matching first word only) (i.e., "Beth").
                    ///       ([^>]+-)? finds words where the match is not the first of a hyphenated word (i.e., "Maachah").
                    ///       The current English version (KJV) does not use square brackets ([]).
                    ///FIXME: The punctuation ,.?!;:)( could be considered language specific.
                    ///TODO:  Bench mark different regex (creation and testing).
                    if (!add_morph_regex || (len_after === len_before && len_after < 3)) {
                        highlight_regex[count] = new RegExp("=([0-9]+)>\\(*(?:" + stemmed_word + "|[^<]+-" + stemmed_word + ")[),.?!;:]*[<-]", "i");
                    } else {
                        /// Find most words based on stem morphology.
                        /// Because it just uses the stem plus up to 7 additional characters, this can have false hits.
                        ///NOTE: [bdfgmnprt]? selects possible doubles.
                        highlight_regex[count] = new RegExp("=([0-9]+)>\\(*(?:" + stemmed_word + "|[^<]+-" + stemmed_word + ")(?:e|l)?(?:a(?:l|n(?:ce|t)|te|ble)|e(?:n(?:ce|t)|r|ment)|i(?:c|ble|on|sm|ti|ve|ze)|ment|ous?)?(?:ic(?:a(?:te|l)|iti)|a(?:tive|lize)|ful|ness|self)?(?:a(?:t(?:ion(?:al)?|or)|nci|l(?:li|i(?:sm|ti)))|tional|e(?:n(?:ci|til)|li)|i(?:z(?:er|ation)|v(?:eness|iti))|b(?:li|iliti)|ous(?:li|ness)|fulness|logi)?(?:[bdfgmnprt]?(?:i?ng(?:ly)?|e?(?:d(?:ly)?|ed(?:ly)?|st|th)|ly))?(?:e[sd]|s)?(?:'(?:s'?)?)?[),.?!;:]*[<-]", "i");
                    }
                    count += 1;
                }
                
                return highlight_regex;
            };
        }()),


        /**
         * Determines the id of a verse from a reference.
         *
         * Determines if a verse is a reference and then calculates the verse id.
         * It supports various abbreviated forms as well as misspellings.
         * Only a book is required or checked for validity.
         * The verse id format is [B]BCCCVVV (e.g., Genesis 1:1 == 1001001).
         *
         * @example verse_id = determine_reference("Gen");                      /// Returns "10001001"
         * @example verse_id = determine_reference("first thesalonions 3:10");  /// Returns "52003010" (note the misspelling).
         * @example verse_id = determine_reference("Habakkuk 99:1");            /// Returns "35099001" (note the invalid chapter reference).
         * @example verse_id = determine_reference("love");                     /// Returns FALSE
         * @param   ref (string) The text that may or may not be a valid verse reference.
         * @return  The verse id of a reference (as a string) or the integer 0 if invalid.
         */
        determine_reference: (function ()
        {
            /// Book Regex
            ///NOTE: Created in the Forge via create_reference_regex.php on 02-10-2012 from ref_array_en.php.
            var books_re = /^(?:1(?: (?:c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|o(?:r(?:inthi(?:ans?|ons?))?)?|ron(?:icles)?)|j(?:n|o(?:hn)?)|k(?:gs?|i(?:ngs?)?)|p(?:e(?:t(?:er?)?)?|t)|s(?:a(?:m(?:uel)?)?|m)|t(?:h(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i(?:m(?:othy)?)?|m))|c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|o(?:r(?:inthi(?:ans?|ons?))?)?|ron(?:icles)?)|j(?:n|o(?:hn)?)|k(?:gs?|i(?:ngs?)?|ngs?)|p(?:e(?:t(?:er?)?)?|t)|s(?:a(?:m(?:uel)?)?|m|t (?:c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|o(?:r(?:inthi(?:ans?|ons?))?)?|ron(?:icles)?)|j(?:n|o(?:hn)?)|k(?:gs?|i(?:ngs?)?)|p(?:e(?:t(?:er?)?)?|t)|s(?:a(?:m(?:uel)?)?|m)|t(?:h(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i(?:m(?:othy)?)?|m)))|t(?:h(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i(?:m(?:othy)?)?|m))|2(?: (?:c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|o(?:r(?:inthi(?:ans?|ons?))?)?|ron(?:icles)?)|j(?:n|o(?:hn)?)|k(?:gs?|i(?:ngs?)?)|p(?:e(?:t(?:er?)?)?|t)|s(?:a(?:m(?:uel)?)?|m)|t(?:h(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i(?:m(?:othy)?)?|m))|c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|o(?:r(?:inthi(?:ans?|ons?))?)?|ron(?:icles)?)|j(?:n|o(?:hn)?)|k(?:gs?|i(?:ngs?)?|ngs?)|nd (?:c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|o(?:r(?:inthi(?:ans?|ons?))?)?|ron)|j(?:n|o(?:hn)?)|k(?:gs?|i(?:ngs?)?)|p(?:e(?:t(?:er?)?)?|t)|s(?:a(?:m(?:uel)?)?|m)|t(?:h(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i(?:m(?:othy)?)?|m))|p(?:e(?:t(?:er?)?)?|t)|s(?:a(?:m(?:uel)?)?|m|t cronicles)|t(?:h(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i(?:m(?:othy)?)?|m))|3(?: j(?:n|o(?:hn)?)|j(?:n|o(?:hn)?)|rd j(?:n|o(?:hn)?))|a(?:c(?:t(?: of the apostles?|s(?: of the apostles?)?)?)?|m(?:os?)?|p(?:a(?:c(?:al(?:ipse?|ypse?)|k(?:al(?:ipse?|ypse?))?)?|k(?:al(?:ipse?|ypse?))?)|o(?:c(?:al(?:ipse?|ypse?)|k(?:al(?:ipse?|ypse?))?)?|k(?:al(?:ipse?|ypse?))?)))|c(?:ant(?:e(?:cles?|sles?)|i(?:cles?|sles?))?|hron(?:i(?:c(?:hles?|les?)|kles?))?|ol(?:a(?:s(?:hi(?:ans?|ons?)|i(?:ans?|ons?)|si(?:ans?|ons?))|ti(?:ans?|ons?))|o(?:s(?:hi(?:ans?|ons?)|i(?:ans?|ons?)|si(?:ans?|ons?))|ti(?:ans?|ons?)))?)|d(?:a(?:n(?:e(?:il|l)|i(?:el|l))?)?|eu(?:t(?:eron(?:amy|omy))?)?|n|t|u(?:e(?:t(?:eron(?:amy|omy))?)?|t(?:eron(?:amy|omy))?)?)|e(?:c(?:c(?:l(?:es(?:iastes?)?)?)?|l(?:es(?:iast(?:es?|is?))?)?)?|f(?:e(?:si(?:ans?|ons?)|ti(?:ans?|ons?)))?|p(?:h(?:e(?:si(?:ans?|ons?)|ti(?:ans?|ons?)))?)?|r|st(?:er|h(?:er)?)?|x(?:o(?:d(?:us?)?)?)?|z(?:e(?:k(?:i(?:al|el))?)?|k|ra?)?)|first (?:c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|o(?:r(?:inthi(?:ans?|ons?))?)?|ron(?:icles)?)|j(?:n|o(?:hn)?)|k(?:gs?|i(?:ngs?)?)|p(?:e(?:t(?:er?)?)?|t)|s(?:a(?:m(?:uel)?)?|m)|t(?:h(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i(?:m(?:othy)?)?|m))|g(?:a(?:l(?:a(?:si(?:ans?|ons?)|ti(?:ans?|ons?)))?)?|e(?:n(?:asis?|esis?|isis?)?)?|ne?)|h(?:a(?:b(?:a(?:c(?:a(?:ck?|k)|u(?:ck?|k))|k(?:a(?:c|k)|k(?:a(?:c|k)|u(?:c|k))|u(?:c|k))))?|g(?:ai|g(?:ai)?)?)?|br?|eb(?:r(?:ews?)?)?|g|o(?:s(?:a(?:ya)?|eah?|ia)?)?)|i(?: (?:c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|o(?:r(?:inthi(?:ans?|ons?))?)?|ron(?:icles)?)|j(?:n|o(?:hn)?)|k(?:gs?|i(?:ngs?)?)|p(?:e(?:t(?:er?)?)?|t)|s(?:a(?:m(?:uel)?)?|m)|t(?:h(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i(?:m(?:othy)?)?|m))|i(?: (?:c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|o(?:r(?:inthi(?:ans?|ons?))?)?|ron(?:icles)?)|j(?:n|o(?:hn)?)|k(?:gs?|i(?:ngs?)?)|p(?:e(?:t(?:er?)?)?|t)|s(?:a(?:m(?:uel)?)?|m)|t(?:h(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i(?:m(?:othy)?)?|m))|i j(?:n|o(?:hn)?))|s(?:a(?:ah|i(?:ah?|h))?|iah?)?)|j(?:a(?:m(?:es?)?|s)?|b|d(?:gs?|s)?|er(?:amiah?|emiah?|imiah?)?|g(?:ds?|s)?|hn|l|nh?|o(?:b|el?|hn?|l|n(?:ah?)?|s(?:h(?:ua)?)?)?|r|u(?:d(?:e|g(?:es?|s)?)?)?)|k(?:ings?|ngs?)|l(?:a(?:m(?:antati(?:ans?|ons?)|entati(?:ans?|ons?)|intati(?:ans?|ons?))?|v(?:iti(?:c(?:as|us)|k(?:as|us)))?)?|ev(?:iti(?:c(?:as|us?)|k(?:as|us?)))?|ke?|m|u(?:ke?)?|v)|m(?:a(?:kr|l(?:a(?:c(?:ai|h(?:ai|i)|i|k(?:ai|i))|k(?:ai|i))|e(?:c(?:ai|h(?:ai|i)|i|k(?:ai|i))|k(?:ai|i)))?|rk?|t(?:h(?:e(?:uw|w)|u(?:ew|w))?|t(?:h(?:e(?:uw|w)|u(?:ew|w)))?)?)|ch|i(?:c(?:ah?|hah?)?|k(?:ah?|ea?))?|k|l|rk?|t)|n(?:a(?:h(?:um)?|m)?|e(?:amiah?|emiah?|h(?:amiah?|emiah?|imiah?)?|imiah?)?|i(?:amiah?|emiah?|h(?:amiah?|emiah?|imiah?)?)?|m|u(?:m(?:bers?)?)?)|ob(?:a(?:d(?:iah?)?)?|d)?|p(?:eter?|h(?:i(?:l(?:e(?:m(?:on)?)?|i(?:p(?:i(?:ans?|ons?)|pi(?:ans?|ons?)))?)?)?|lm|m|p)?|r(?:o(?:v(?:erbs?)?)?|v)?|s(?:a(?:lms?)?|s)?|v)|r(?:ev(?:alati(?:ans?|ons?)|elati(?:ans?|ons?))?|m|o(?:m(?:ans?|e)?)?|th?|u(?:th?)?|v)|s(?:a(?:lms?|m(?:uel)?)|ec(?: c(?:hr(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?|ronicles)|ond (?:c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|o(?:r(?:inthi(?:ans?|ons?))?)?|ron(?:icles)?)|j(?:n|o(?:hn)?)|k(?:gs?|i(?:ngs?)?)|p(?:e(?:t(?:er?)?)?|t)|s(?:a(?:m(?:uel)?)?|m)|t(?:h(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i(?:m(?:othy)?)?|m)))|g|ng|o(?:lomon|n(?:g(?: of so(?:lom(?:an|on)|ngs?)|s(?: of solom(?:an|on))?)?)?))|t(?:h(?:e (?:act(?: of the apostles?|s of the apostles?)|song(?: of so(?:lom(?:an|on)|ngs?)|s of solom(?:an|on)))|ird j(?:n|o(?:hn)?))|i(?:m(?:othy)?|t(?:us?)?)?|m|t)|z(?:a(?:c(?:h(?:ariah?|eriah?)?|k(?:ariah?|eriah?))?|k(?:ariah?|eriah?)?)?|c(?:h|k)?|e(?:c(?:h(?:ariah?|eriah?)?|k(?:ariah?|eriah?)?)?|k(?:ariah?|eriah?)?|p(?:h(?:aniah?|eniah?)?)?)?|k|p))[\s0-9:.;,\-]*$/i,
                book_arr_re = [0, /^g(?:e(?:n(?:asis?|esis?|isis?)?)?|ne?)[\s0-9:.;,\-]*$/i, /^ex(?:o(?:d(?:us?)?)?)?[\s0-9:.;,\-]*$/i, /^l(?:av(?:iti(?:c(?:as|us)|k(?:as|us)))?|ev(?:iti(?:c(?:as|us?)|k(?:as|us?)))?|v)[\s0-9:.;,\-]*$/i, /^n(?:m|u(?:m(?:bers?)?)?)[\s0-9:.;,\-]*$/i, /^d(?:eu(?:t(?:eron(?:amy|omy))?)?|t|u(?:e(?:t(?:eron(?:amy|omy))?)?|t(?:eron(?:amy|omy))?)?)[\s0-9:.;,\-]*$/i, /^jos(?:h(?:ua)?)?[\s0-9:.;,\-]*$/i, /^j(?:d(?:gs?|s)?|g(?:ds?|s)?|udg(?:es?|s)?)[\s0-9:.;,\-]*$/i, /^r(?:th?|u(?:th?)?)[\s0-9:.;,\-]*$/i, /^(?:1(?: s(?:a(?:m(?:uel)?)?|m)|s(?:a(?:m(?:uel)?)?|m|t s(?:a(?:m(?:uel)?)?|m)))|first s(?:a(?:m(?:uel)?)?|m)|i s(?:a(?:m(?:uel)?)?|m)|sam(?:uel)?)[\s0-9:.;,\-]*$/i, /^(?:2(?: s(?:a(?:m(?:uel)?)?|m)|nd s(?:a(?:m(?:uel)?)?|m)|s(?:a(?:m(?:uel)?)?|m))|ii s(?:a(?:m(?:uel)?)?|m)|second s(?:a(?:m(?:uel)?)?|m))[\s0-9:.;,\-]*$/i, /^(?:1(?: k(?:gs?|i(?:ngs?)?)|k(?:gs?|i(?:ngs?)?|ngs?)|st k(?:gs?|i(?:ngs?)?))|first k(?:gs?|i(?:ngs?)?)|i k(?:gs?|i(?:ngs?)?)|k(?:ings?|ngs?))[\s0-9:.;,\-]*$/i, /^(?:2(?: k(?:gs?|i(?:ngs?)?)|k(?:gs?|i(?:ngs?)?|ngs?)|nd k(?:gs?|i(?:ngs?)?))|ii k(?:gs?|i(?:ngs?)?)|second k(?:gs?|i(?:ngs?)?))[\s0-9:.;,\-]*$/i, /^(?:1(?: c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|ron(?:icles)?)|c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|ron(?:icles)?)|st c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|ron(?:icles)?))|chron(?:i(?:c(?:hles?|les?)|kles?))?|first c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|ron(?:icles)?)|i c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|ron(?:icles)?))[\s0-9:.;,\-]*$/i, /^(?:2(?: c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|ron(?:icles)?)|c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|ron(?:icles)?)|nd c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|ron)|st cronicles)|ii c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|ron(?:icles)?)|sec(?: c(?:hr(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?|ronicles)|ond c(?:h(?:r(?:on(?:i(?:c(?:hles?|les?)|kles?))?)?)?|ron(?:icles)?)))[\s0-9:.;,\-]*$/i, /^e(?:r|zra?)[\s0-9:.;,\-]*$/i, /^n(?:e(?:amiah?|emiah?|h(?:amiah?|emiah?|imiah?)?|imiah?)?|i(?:amiah?|emiah?|h(?:amiah?|emiah?|imiah?)?)?)[\s0-9:.;,\-]*$/i, /^est(?:er|h(?:er)?)?[\s0-9:.;,\-]*$/i, /^j(?:b|ob)[\s0-9:.;,\-]*$/i, /^(?:ps(?:a(?:lms?)?|s)?|salms?)[\s0-9:.;,\-]*$/i, /^p(?:r(?:o(?:v(?:erbs?)?)?|v)?|v)[\s0-9:.;,\-]*$/i, /^ec(?:c(?:l(?:es(?:iastes?)?)?)?|l(?:es(?:iast(?:es?|is?))?)?)?[\s0-9:.;,\-]*$/i, /^(?:cant(?:e(?:cles?|sles?)|i(?:cles?|sles?))?|s(?:g|ng|o(?:lomon|n(?:g(?: of so(?:lom(?:an|on)|ngs?)|s(?: of solom(?:an|on))?)?)?))|the song(?: of so(?:lom(?:an|on)|ngs?)|s of solom(?:an|on)))[\s0-9:.;,\-]*$/i, /^is(?:a(?:ah|i(?:ah?|h))?|iah?)?[\s0-9:.;,\-]*$/i, /^j(?:er(?:amiah?|emiah?|imiah?)?|r)[\s0-9:.;,\-]*$/i, /^l(?:a(?:m(?:antati(?:ans?|ons?)|entati(?:ans?|ons?)|intati(?:ans?|ons?))?)?|m)[\s0-9:.;,\-]*$/i, /^ez(?:e(?:k(?:i(?:al|el))?)?|k)?[\s0-9:.;,\-]*$/i, /^d(?:a(?:n(?:e(?:il|l)|i(?:el|l))?)?|n)[\s0-9:.;,\-]*$/i, /^ho(?:s(?:a(?:ya)?|eah?|ia)?)?[\s0-9:.;,\-]*$/i, /^j(?:l|o(?:el?|l))[\s0-9:.;,\-]*$/i, /^am(?:os?)?[\s0-9:.;,\-]*$/i, /^ob(?:a(?:d(?:iah?)?)?|d)?[\s0-9:.;,\-]*$/i, /^j(?:nh|on(?:ah?)?)[\s0-9:.;,\-]*$/i, /^m(?:ch|i(?:c(?:ah?|hah?)?|k(?:ah?|ea?))?)[\s0-9:.;,\-]*$/i, /^na(?:h(?:um)?|m)?[\s0-9:.;,\-]*$/i, /^ha(?:b(?:a(?:c(?:a(?:ck?|k)|u(?:ck?|k))|k(?:a(?:c|k)|k(?:a(?:c|k)|u(?:c|k))|u(?:c|k))))?)?[\s0-9:.;,\-]*$/i, /^z(?:ep(?:h(?:aniah?|eniah?)?)?|p)[\s0-9:.;,\-]*$/i, /^h(?:ag(?:ai|g(?:ai)?)?|g)[\s0-9:.;,\-]*$/i, /^z(?:a(?:c(?:h(?:ariah?|eriah?)?|k(?:ariah?|eriah?))?|k(?:ariah?|eriah?)?)?|c(?:h|k)?|e(?:c(?:h(?:ariah?|eriah?)?|k(?:ariah?|eriah?)?)?|k(?:ariah?|eriah?)?)?|k)[\s0-9:.;,\-]*$/i, /^m(?:al(?:a(?:c(?:ai|h(?:ai|i)|i|k(?:ai|i))|k(?:ai|i))|e(?:c(?:ai|h(?:ai|i)|i|k(?:ai|i))|k(?:ai|i)))?|l)[\s0-9:.;,\-]*$/i, /^m(?:at(?:h(?:e(?:uw|w)|u(?:ew|w))?|t(?:h(?:e(?:uw|w)|u(?:ew|w)))?)?|t)[\s0-9:.;,\-]*$/i, /^m(?:a(?:kr|rk?)|k|rk?)[\s0-9:.;,\-]*$/i, /^l(?:ke?|u(?:ke?)?)[\s0-9:.;,\-]*$/i, /^j(?:hn|n|o(?:hn?)?)[\s0-9:.;,\-]*$/i, /^(?:ac(?:t(?: of the apostles?|s(?: of the apostles?)?)?)?|the act(?: of the apostles?|s of the apostles?))[\s0-9:.;,\-]*$/i, /^r(?:m|o(?:m(?:ans?|e)?)?)[\s0-9:.;,\-]*$/i, /^(?:1(?: co(?:r(?:inthi(?:ans?|ons?))?)?|co(?:r(?:inthi(?:ans?|ons?))?)?|st co(?:r(?:inthi(?:ans?|ons?))?)?)|first co(?:r(?:inthi(?:ans?|ons?))?)?|i co(?:r(?:inthi(?:ans?|ons?))?)?)[\s0-9:.;,\-]*$/i, /^(?:2(?: co(?:r(?:inthi(?:ans?|ons?))?)?|co(?:r(?:inthi(?:ans?|ons?))?)?|nd co(?:r(?:inthi(?:ans?|ons?))?)?)|ii co(?:r(?:inthi(?:ans?|ons?))?)?|second co(?:r(?:inthi(?:ans?|ons?))?)?)[\s0-9:.;,\-]*$/i, /^ga(?:l(?:a(?:si(?:ans?|ons?)|ti(?:ans?|ons?)))?)?[\s0-9:.;,\-]*$/i, /^e(?:f(?:e(?:si(?:ans?|ons?)|ti(?:ans?|ons?)))?|p(?:h(?:e(?:si(?:ans?|ons?)|ti(?:ans?|ons?)))?)?)[\s0-9:.;,\-]*$/i, /^ph(?:i(?:l(?:i(?:p(?:i(?:ans?|ons?)|pi(?:ans?|ons?)))?)?)?|p)?[\s0-9:.;,\-]*$/i, /^col(?:a(?:s(?:hi(?:ans?|ons?)|i(?:ans?|ons?)|si(?:ans?|ons?))|ti(?:ans?|ons?))|o(?:s(?:hi(?:ans?|ons?)|i(?:ans?|ons?)|si(?:ans?|ons?))|ti(?:ans?|ons?)))?[\s0-9:.;,\-]*$/i, /^(?:1(?: th(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|st th(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|th(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?)|first th(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|i th(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?)[\s0-9:.;,\-]*$/i, /^(?:2(?: th(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|nd th(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|th(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?)|ii th(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?|second th(?:e(?:s(?:aloni(?:ans?|ons?)|s(?:aloni(?:ans?|ons?))?)?)?)?)[\s0-9:.;,\-]*$/i, /^(?:1(?: t(?:i(?:m(?:othy)?)?|m)|st t(?:i(?:m(?:othy)?)?|m)|t(?:i(?:m(?:othy)?)?|m))|first t(?:i(?:m(?:othy)?)?|m)|i t(?:i(?:m(?:othy)?)?|m)|t(?:i(?:m(?:othy)?)?|m))[\s0-9:.;,\-]*$/i, /^(?:2(?: t(?:i(?:m(?:othy)?)?|m)|nd t(?:i(?:m(?:othy)?)?|m)|t(?:i(?:m(?:othy)?)?|m))|ii t(?:i(?:m(?:othy)?)?|m)|second t(?:i(?:m(?:othy)?)?|m))[\s0-9:.;,\-]*$/i, /^t(?:it(?:us?)?|t)[\s0-9:.;,\-]*$/i, /^ph(?:ile(?:m(?:on)?)?|lm|m)[\s0-9:.;,\-]*$/i, /^h(?:br?|eb(?:r(?:ews?)?)?)[\s0-9:.;,\-]*$/i, /^ja(?:m(?:es?)?|s)?[\s0-9:.;,\-]*$/i, /^(?:1(?: p(?:e(?:t(?:er?)?)?|t)|p(?:e(?:t(?:er?)?)?|t)|st p(?:e(?:t(?:er?)?)?|t))|first p(?:e(?:t(?:er?)?)?|t)|i p(?:e(?:t(?:er?)?)?|t)|peter?)[\s0-9:.;,\-]*$/i, /^(?:2(?: p(?:e(?:t(?:er?)?)?|t)|nd p(?:e(?:t(?:er?)?)?|t)|p(?:e(?:t(?:er?)?)?|t))|ii p(?:e(?:t(?:er?)?)?|t)|second p(?:e(?:t(?:er?)?)?|t))[\s0-9:.;,\-]*$/i, /^(?:1(?: j(?:n|o(?:hn)?)|j(?:n|o(?:hn)?)|st j(?:n|o(?:hn)?))|first j(?:n|o(?:hn)?)|i j(?:n|o(?:hn)?))[\s0-9:.;,\-]*$/i, /^(?:2(?: j(?:n|o(?:hn)?)|j(?:n|o(?:hn)?)|nd j(?:n|o(?:hn)?))|ii j(?:n|o(?:hn)?)|second j(?:n|o(?:hn)?))[\s0-9:.;,\-]*$/i, /^(?:3(?: j(?:n|o(?:hn)?)|j(?:n|o(?:hn)?)|rd j(?:n|o(?:hn)?))|iii j(?:n|o(?:hn)?)|third j(?:n|o(?:hn)?))[\s0-9:.;,\-]*$/i, /^ju(?:de?)?[\s0-9:.;,\-]*$/i, /^(?:ap(?:a(?:c(?:al(?:ipse?|ypse?)|k(?:al(?:ipse?|ypse?))?)?|k(?:al(?:ipse?|ypse?))?)|o(?:c(?:al(?:ipse?|ypse?)|k(?:al(?:ipse?|ypse?))?)?|k(?:al(?:ipse?|ypse?))?))|r(?:ev(?:alati(?:ans?|ons?)|elati(?:ans?|ons?))?|v))[\s0-9:.;,\-]*$/i];
            
            return function (ref)
            {
                var book = 0,
                    chapter,
                    cv,
                    verse,
                    zeros;
                
                /// First determine if it is likely a verse reference.
                if (!books_re.test(ref)) {
                    return 0;
                }
                
                switch (ref.slice(0, 1).toLowerCase()) {
                case "j":
                    if (book_arr_re[43].test(ref)) {
                        /// John
                        book = "43";
                        break;
                    } else if (book_arr_re[32].test(ref)) { /// Jonah
                        book = "32";
                        break;
                    } else if (book_arr_re[59].test(ref)) { /// James
                        book = "59";
                        break;
                    } else if (book_arr_re[6].test(ref)) {  /// Joshua
                        book = "6";
                        break;
                    } else if (book_arr_re[7].test(ref)) {  /// Judges
                        book = "7";
                        break;
                    } else if (book_arr_re[18].test(ref)) { /// Job
                        book = "18";
                        break;
                    } else if (book_arr_re[65].test(ref)) { /// Jude
                        book = "65";
                        break;
                    } else if (book_arr_re[24].test(ref)) { /// Jeremiah
                        book = "24";
                        break;
                    } else if (book_arr_re[29].test(ref)) { /// Joel
                        book = "29";
                        break;
                    }
                    break;
                case "r":
                    if (book_arr_re[45].test(ref)) {        /// Romans
                        book = "45";
                        break;
                    } else if (book_arr_re[66].test(ref)) { /// Revelation
                        book = "66";
                        break;
                    } else if (book_arr_re[8].test(ref)) {  /// Ruth
                        book = "8";
                        break;
                    }
                    break;
                case "g":
                    if (book_arr_re[1].test(ref)) {         /// Genesis
                        book = "1";
                        break;
                    } else if (book_arr_re[48].test(ref)) { /// Galatians
                        book = "48";
                        break;
                    }
                    break;
                case "e":
                    if (book_arr_re[2].test(ref)) {         /// Exodus
                        book = "2";
                        break;
                    } else if (book_arr_re[49].test(ref)) { /// Ephesians
                        book = "49";
                        break;
                    } else if (book_arr_re[26].test(ref)) { /// Ezekiel
                        book = "26";
                        break;
                    } else if (book_arr_re[21].test(ref)) { /// Ecclesiastes
                        book = "21";
                        break;
                    } else if (book_arr_re[17].test(ref)) { /// Esther
                        book = "17";
                        break;
                    } else if (book_arr_re[15].test(ref)) { /// Ezra
                        book = "15";
                        break;
                    }
                    break;
                case "m":
                    if (book_arr_re[40].test(ref)) {        /// Matthew
                        book = "40";
                        break;
                    } else if (book_arr_re[41].test(ref)) { /// Mark
                        book = "41";
                        break;
                    } else if (book_arr_re[39].test(ref)) { /// Malachi
                        book = "39";
                        break;
                    } else if (book_arr_re[33].test(ref)) { /// Micah
                        book = "33";
                        break;
                    }
                    break;
                case "l":
                    if (book_arr_re[42].test(ref)) {        /// Luke
                        book = "42";
                        break;
                    } else if (book_arr_re[3].test(ref)) {  /// Leviticus
                        book = "3";
                        break;
                    } else if (book_arr_re[25].test(ref)) { /// Lamentations
                        book = "25";
                        break;
                    }
                    break;
                case "p":
                    if (book_arr_re[19].test(ref)) {        /// Psalms
                        book = "19";
                        break;
                    } else if (book_arr_re[20].test(ref)) { /// Proverbs
                        book = "20";
                        break;
                    } else if (book_arr_re[50].test(ref)) { /// Philippians
                        book = "50";
                        break;
                    } else if (book_arr_re[57].test(ref)) { /// Philemon
                        book = "57";
                        break;
                    } else if (book_arr_re[60].test(ref)) { /// 1 Peter (Peter)
                        book = "60";
                        break;
                    }
                    break;
                case "d":
                    if (book_arr_re[5].test(ref)) {         /// Deuteronomy
                        book = "5";
                        break;
                    } else if (book_arr_re[27].test(ref)) { /// Daniel
                        book = "27";
                        break;
                    }
                    break;
                case "i":
                    if (book_arr_re[23].test(ref)) {        /// Isaiah
                        book = "23";
                        break;
                    }
                    ///NOTE: Don't break so that references like "I Kings" will be checked.
                case "1":
                case "f":
                    if (book_arr_re[46].test(ref)) {        /// 1 Corinthians | First Corinthians| I Corinthians
                        book = "46";
                        break;
                    } else if (book_arr_re[62].test(ref)) { /// 1 John | First John | I John
                        book = "62";
                        break;
                    } else if (book_arr_re[54].test(ref)) { /// 1 Timothy | First Timothy | I Timothy
                        book = "54";
                        break;
                    } else if (book_arr_re[52].test(ref)) { /// 1 Thessalonians | First Thessalonians | I Thessalonians
                        book = "52";
                        break;
                    } else if (book_arr_re[60].test(ref)) { /// 1 Peter | First Peter | I Peter
                        book = "60";
                        break;
                    } else if (book_arr_re[9].test(ref)) {  /// 1 Samuel | First Samuel | I Samuel
                        book = "9";
                        break;
                    } else if (book_arr_re[11].test(ref)) { /// 1 Kings | First Kings | I Kings
                        book = "11";
                        break;
                    } else if (book_arr_re[13].test(ref)) { /// 1 Chronicles | First Chronicles | I Chronicles
                        book = "13";
                        break;
                    }
                    ///NOTE: Don't break so that references like "II Kings" will be checked.
                case "2":
                case "s":
                    if (book_arr_re[47].test(ref)) {        /// 2 Corinthians | Second Corinthians| II Corinthians
                        book = "47";
                        break;
                    } else if (book_arr_re[63].test(ref)) { /// 2 John | Second John | II John
                        book = "63";
                        break;
                    } else if (book_arr_re[55].test(ref)) { /// 2 Timothy | Second Timothy | II Timothy
                        book = "55";
                        break;
                    } else if (book_arr_re[53].test(ref)) { /// 2 Thessalonians | Second Thessalonians | II Thessalonians
                        book = "53";
                        break;
                    } else if (book_arr_re[61].test(ref)) { /// 2 Peter | Second Peter | II Peter
                        book = "61";
                        break;
                    } else if (book_arr_re[22].test(ref)) { /// Song of Songs
                        book = "22";
                        break;
                    } else if (book_arr_re[10].test(ref)) { /// 2 Samuel | Second Samuel | II Samuel
                        book = "10";
                        break;
                    } else if (book_arr_re[12].test(ref)) { /// 2 Kings | Second Kings | II Kings
                        book = "12";
                        break;
                    } else if (book_arr_re[14].test(ref)) { /// 2 Chronicles | Second Chronicles | II Chronicles
                        book = "14";
                        break;
                    } else if (book_arr_re[9].test(ref)) {  /// 1 Samuel (Samuel)
                        book = "9";
                        break;
                    } else if (book_arr_re[19].test(ref)) { /// Psalms (Salms)
                        book = "19";
                        break;
                    }
                    ///NOTE: Don't break so that references like "III John" will be checked.
                case "3":
                case "t":
                    if (book_arr_re[64].test(ref)) {        /// 3 John | Third John | III John
                        book = "64";
                        break;
                    } else if (book_arr_re[56].test(ref)) { /// Titus
                        book = "56";
                        break;
                    } else if (book_arr_re[54].test(ref)) { /// 1 Timothy (Timothy)
                        book = "54";
                        break;
                    } else if (book_arr_re[52].test(ref)) { /// 1 Thessalonians (Thessalonians)
                        book = "52";
                        break;
                    } else if (book_arr_re[44].test(ref)) { /// The Acts of the Apostles
                        book = "44";
                        break;
                    } else if (book_arr_re[22].test(ref)) { /// The Song of Songs
                        book = "22";
                        break;
                    }
                    break;
                case "a":
                    if (book_arr_re[44].test(ref)) {        /// Acts
                        book = "44";
                        break;
                    } else if (book_arr_re[30].test(ref)) { /// Amos
                        book = "30";
                        break;
                    } else if (book_arr_re[66].test(ref)) { /// Revelation (Apocalypse)
                        book = "66";
                        break;
                    }
                    break;
                case "c":
                    if (book_arr_re[51].test(ref)) {        /// Colossians
                        book = "51";
                        break;
                    } else if (book_arr_re[46].test(ref)) { /// 1 Corinthians (Corinthians)
                        book = "46";
                        break;
                    } else if (book_arr_re[22].test(ref)) { /// Song of Songs (Canticles)
                        book = "22";
                        break;
                    } else if (book_arr_re[13].test(ref)) { /// 1 Chronicles (Chronicles)
                        book = "13";
                        break;
                    }
                    break;
                case "h":
                    if (book_arr_re[58].test(ref)) {        /// Hebrews
                        book = "58";
                        break;
                    } else if (book_arr_re[28].test(ref)) { /// Hosea
                        book = "28";
                        break;
                    } else if (book_arr_re[35].test(ref)) { /// Habakkuk
                        book = "35";
                        break;
                    } else if (book_arr_re[37].test(ref)) { /// Haggai
                        book = "37";
                        break;
                    }
                    break;
                case "n":
                    if (book_arr_re[4].test(ref)) {         /// Numbers
                        book = "4";
                        break;
                    } else if (book_arr_re[16].test(ref)) { /// Nehemiah
                        book = "16";
                        break;
                    } else if (book_arr_re[34].test(ref)) { /// Nahum
                        book = "34";
                        break;
                    }
                    break;
                case "z":
                    if (book_arr_re[38].test(ref)) {        /// Zechariah
                        book = "38";
                        break;
                    } else if (book_arr_re[36].test(ref)) { /// Zephaniah
                        book = "36";
                        break;
                    }
                    break;
                case "k":
                    if (book_arr_re[11].test(ref)) {        /// 1 Kings (Kings)
                        book = "11";
                        break;
                    }
                    break;
                case "o":
                    if (book_arr_re[31].test(ref)) {        /// Obadiah
                        book = "31";
                        break;
                    }
                    break;
                }
                
                if (book === 0) {
                    return 0;
                }
                
                chapter = "001";
                verse   = "001";
                
                /// Finally, we need to determine the chapter and/or verse reference is they are supplied.
                ///TODO: Explain regex and give examples.
                cv = ref.split(/\s*([0-9]{1,3})(?:[:.;,\s]([0-9]{0,3})[\-0-9]*)?$/);
                
                if (cv.length > 1) {
                    /// Is the number a valid chapter?
                    if (cv[1] > 0) {
                        chapter = String(cv[1]);
                    } else {
                        chapter = "1";
                    }
                    
                    if (cv[2] !== "" && typeof cv[2] !== "undefined") {
                        verse = String(cv[2]);
                    } else {
                        /// For books with only 1 chapter, the chapter reference is optional (i.e., Jude 4 == Jude 1:4).
                        if (this.chapter_count[book] === 1) {
                            verse   = chapter;
                            chapter = "001";
                        }
                    }
                    zeros   = ["", "00", "0", ""];
                    chapter = zeros[chapter.length] + chapter;
                    verse   = zeros[verse.length]   + verse;
                }
                
                return book + chapter + verse;
            };
        }()),
        
        /**
         * Prepares search terms to adhere to Sphinx syntax before submission to the server.
         *
         * Converts special words to symbols, and converts certain characters to a format adhere to Sphinx syntax.
         *
         * @example query = prepare_search("NOT in  the  AND good OR  beginning  "); /// Returns "-in the & good | beginning  "
         * @example query = prepare_search("ps 16:title");                           /// Returns "ps 16:0"
         * @example query = prepare_search("“God is good”");                         /// Returns '"God is good"' (Note the curly quotes.)
         * @param   query (string) The terms to be examined.
         * @return  A string that conforms to Sphinx syntax.
         * @note    Called by preform_query() in js/main.js.
         * @note    Replaces AND, OR, and NOT with &, |, and - respectively.
         * @note    Replaces curly quotes with straight.
         * @note    Replaces various hyphens, dashes, and minuses with the standard hyphen (-).
         * @note    This function assumes that whitespace will be trimmed afterward.
         * @todo    Determine if this should be moved out of the language specific file (and maybe just use some language specific variables).
         */
        prepare_query: function (query)
        {
            ///NOTE: /\s+/g gets rid of double spaces within the words (e.g., "here    there" becomes "here there")
            ///      and converts all types of white space to the normal space (e.g., converts non-breaking spaces to normal spaces).
            ///NOTE: /\s+-\s+/g ensures that filter_array() will filter out negative words like "this - that" (i.e., "that" does not need to be highlighted).
            ///NOTE: \u2011-\u2015 replaces various hyphens, dashes, and minuses with the standard hyphen (-).
            ///NOTE: replace(/([0-9]+)[:.;,\s]title/ig, "$1:0") replaces Psalm title references into an acceptable format (e.g., "Psalm 3:title" becomes "Psalm 3:0").
            ///NOTE: replace(/([:.;,\s])subscript(?:ion)?/ig, "$1255" replaces the word "subscription" with the verse number (255) used internally by BibleForge for Pauline subscriptions (e.g., "Philemon subscription" becomes "Philemon 255").
            ///NOTE: "$1255" replaces the text with the first placeholder followed by the literal "255" (without quotes).
            return query.replace(" IN RED", " AS RED").replace(/\s+/g, " ").replace(/\sAND\s/g, " & ").replace(/\sOR\s/g, " | ").replace(/(?:\s-|\s*\bNOT)\s/g, " -").replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[\u2011-\u2015]/g, "-").replace(/([0-9]+)[:.;,\s]title/ig, "$1:0").replace(/([:.;,\s])subscript(?:ion)?/ig, "$1255");
        }
    };
}());
