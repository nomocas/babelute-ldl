/**
 * Babelute Lexicon Definition Language
 *
 * @author Gilles Coomans
 * @licence MIT
 * @copyright 2016 Gilles Coomans
 */

import babelute from 'babelute';

const bblldl = babelute
	.createLexicon('bblldl')
	.addAtoms([
		'lexicon',
		'atom',
		'compound',
		'description',
		'argument',
		'method',
		'if',
		'each'
	]);

export default bblldl;

/**
 * @example
 * #bbl-ldl:
 * lexicon('html',
 * 		atom('tag', 
 * 			description('html tag')
 * 			argument('name',
 * 				description('the name of the tag')
 * 				#aright:
 * 				isString()
 * 			)
 * 			argument('babelutes',
 * 				description('an array of babelutes to apply on tag')
 * 				#aright:
 * 				isArray()
 * 				items(
 * 					or(
 * 						isBabelute(),
 * 						isString()
 * 					)
 * 				)
 * 			)
 * 		)
 * 		each(['div', 'section', ...], (tagName) => {
 * 			return h.compound(tagName,
 * 				bbldl
 * 				.description(tagName + ' tag')
 * 			 	.arguments('babelutes',
 * 				 	aright
 * 				 	.optional()
 * 				 	.description('an array of babelutes to apply on tag')
 * 				   	.isArray()
 * 				    .items(
 * 					   a().or(
 * 					   		a().isBabelute('html:*'),
 * 						    a().isString()
 * 					   )
 * 				    )
 * 			     )
 * 			     .method((h) => {
 * 			     	return (...babelutes) => {
 * 				      		return this.tag(tagName, babelutes);
 * 				    };
 * 			     })
 * 		      )
 * 	    })
 * 	)
 */

