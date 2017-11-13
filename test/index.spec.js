'use strict';

const path = require('path');
const EventEmitter = require('events');
const notifier = require('node-notifier');
const webpackIsomorphicIsomorphicNotifier = require('..');

jest.mock('node-notifier', () => ({
    notify: jest.fn(),
}));

const title = 'webpack-isomorphic-compiler-notifier';
const contentImage = path.resolve(__dirname, '../webpack-logo.png');
const sound = false;

beforeEach(jest.clearAllMocks);

it('should report a build success', () => {
    const isomorphicCompiler = new EventEmitter();

    webpackIsomorphicIsomorphicNotifier(isomorphicCompiler);
    isomorphicCompiler.emit('begin');
    isomorphicCompiler.emit('end');

    expect(notifier.notify).toHaveBeenCalledTimes(1);
    expect(notifier.notify.mock.calls[0][0]).toMatchObject({
        title,
        contentImage,
        sound: false,
        message: 'Build successful',
    });
});

it('should report a build error', () => {
    const isomorphicCompiler = new EventEmitter();

    webpackIsomorphicIsomorphicNotifier(isomorphicCompiler);
    isomorphicCompiler.emit('begin');
    isomorphicCompiler.emit('error', new Error('foo'));

    expect(notifier.notify).toHaveBeenCalledTimes(1);
    expect(notifier.notify.mock.calls[0][0]).toMatchObject({
        title,
        contentImage,
        sound,
    });
    expect(notifier.notify.mock.calls[0][0].message).toMatch('foo');
});

it('should not report subsequent successful builds', () => {
    const isomorphicCompiler = new EventEmitter();

    webpackIsomorphicIsomorphicNotifier(isomorphicCompiler);
    isomorphicCompiler.emit('begin');
    isomorphicCompiler.emit('end');
    isomorphicCompiler.emit('begin');
    isomorphicCompiler.emit('end');

    expect(notifier.notify).toHaveBeenCalledTimes(1);
});

it('should report a successful build after a failed one', () => {
    const isomorphicCompiler = new EventEmitter();

    webpackIsomorphicIsomorphicNotifier(isomorphicCompiler);
    isomorphicCompiler.emit('begin');
    isomorphicCompiler.emit('error', new Error('foo'));
    isomorphicCompiler.emit('begin');
    isomorphicCompiler.emit('end');

    expect(notifier.notify).toHaveBeenCalledTimes(2);
    expect(notifier.notify.mock.calls[0][0].message).toMatch('foo');
    expect(notifier.notify.mock.calls[1][0].message).toMatch('Build successful');
});

it('should allow a custom title, icon and sound options', () => {
    const isomorphicCompiler = new EventEmitter();

    webpackIsomorphicIsomorphicNotifier(isomorphicCompiler, {
        title: 'foo',
        icon: 'bar',
        sound: true,
    });
    isomorphicCompiler.emit('begin');
    isomorphicCompiler.emit('end');

    expect(notifier.notify).toHaveBeenCalledTimes(1);
    expect(notifier.notify.mock.calls[0][0]).toMatchObject({
        title: 'foo',
        contentImage: 'bar',
        sound: true,
        message: 'Build successful',
    });
});
