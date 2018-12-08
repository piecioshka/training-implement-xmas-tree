'use strict';

const { expect } = require('chai');

const { tree } = require('../src/xmas-tree');

describe('"tree" function', () => {
    it('should be defined', () => {
        expect(typeof tree).to.be.equal('function');
    });

    it('should return string', () => {
        expect(typeof tree()).to.be.equals('string');
    });

    it('should return star on first level (when pass 1)', () => {
        expect(tree(1)).to.be.equals('*');
    });

    it('should return stars on second level (when pass 2)', () => {
        expect(tree(2)).to.be.equals('*\n**');
    });

    it('should return stars on third level (when pass 3)', () => {
        expect(tree(3)).to.be.equals('*\n**\n***');
    });

    it('should return stars on 4th level (when pass 4)', () => {
        expect(tree(4)).to.be.equals('*\n**\n***\n****');
    });

    it('should return my char as sign', () => {
        expect(tree(4, '-')).to.be.equals('-\n--\n---\n----');
    });
});
