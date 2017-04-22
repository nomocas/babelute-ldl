import babelute from 'babelute';

const pragmas = babelute.createFacadePragmatics({
	'bbl-ldl': true
}, {
	lexic(notused, args /* lexicname, babelute */ , scopes) {
		const lexicName = args[0],
			lexic = babelute.getLexicon(lexicName) || babelute.createLexicon(lexicName);
		lexic.doc = lexic.doc || {};
		scopes.currentLexic = lexicName;
		this.$output(lexic.doc, args[1], scopes);
	},
	atom(lexicDoc, args /* lexemName, babelute */ , scopes) {
		scopes.currentLexic.addAtoms([args[0]]);
		lexicDoc[args[0]] = this.$output({
			arguments: [],
			atom: true
		}, args[1], scopes);
	},
	compound(lexicDoc, args /* lexemName, babelute */ , scopes) {
		scopes.currentLexic.addCompounds(args[1]);
		lexicDoc[args[0]] = this.$output({
			arguments: []
		}, args[1], scopes);
	},
	description(descriptor, args /* text */) {
		descriptor.description = args[0];
	},
	argument(descriptor, args /* argName, babelute */ , scopes) {
		const arg = args[1].$output(scopes, {
			name: args[0],
			validation: args[1]
		});
		descriptor.arguments.push(arg);
	},
	method(descriptor, args /* function */ ) {
		descriptor.method = args[0];
	}
});

export default pragmas;

