import React from 'react';
import classNames, { Binding } from 'classnames/bind';

import styles from './Example.module.pcss';

const cx = classNames.bind(styles as Binding);

const Example = () => <h1 className={cx('title')}>Example</h1>;

export default Example;
