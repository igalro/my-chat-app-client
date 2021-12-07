import config from '../../config/config';
import Request from '../index';

const { frontendServerUrl } = config;

export default new Request(frontendServerUrl);