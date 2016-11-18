'use strict';

module.exports = function (nodecg) {

	const seconds = nodecg.Replicant('seconds',{defaultValue: 0});
	const mints = nodecg.Replicant('mints',{defaultValue: 0});
	const hors = nodecg.Replicant('hors',{defaultValue: 0});

	const gRunner = nodecg.Replicant('gRunner',{defaultValue: " "});
	const gStream = nodecg.Replicant('gStream',{defaultValue: " "});

	const bRunner = nodecg.Replicant('bRunner',{defaultValue: " "});
	const bStream = nodecg.Replicant('bStream',{defaultValue: " "});

	const rRunner = nodecg.Replicant('rRunner',{defaultValue: " "});
	const rStream = nodecg.Replicant('rStream',{defaultValue: " "});
};
