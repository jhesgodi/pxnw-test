import axios from 'axios';

import { githubAPI } from '../config/env';
import { awaitTo, getExtension } from '../lib/utils';

/**
 * Formats a Gist object from given data
 *
 * @param {Array[Object]} data data to be truncated
 */
// FIXME: Move method a gits utils lib
export const filterGistsFields = data => {
  return data.map((gist, index) => {
    const { description, created_at, html_url, owner, files } = gist;
    const date = new Date(created_at).toDateString();
    const category = date.replace(/ .*/, '');
    const files_data = Object.keys(files).map((name, key) => {
      const { type, raw_url, language } = files[name];
      const [title, extension] = getExtension(name);

      return {
        key,
        type,
        title,
        rawUrl: raw_url,
        language,
        fileName: name,
        fileExtension: extension,
      };
    });

    return {
      id: index,
      key: index,
      category,
      description,
      created_at: date,
      owner: {
        login: owner.login,
        htmlUrl: owner.html_url,
      },
      files: files_data,
    };
  });
};

/**
 * Query a public gist list from github API by username
 * @param {String} username github user login
 */
export const getUserGists = async username => {
  const login = username.toLowerCase();
  const endpoint = `${githubAPI.v3}users/${login}/gists`;
  const [error, data] = await awaitTo(axios.get(endpoint));

  if (error) {
    // TODO: Improve and Extend error handling
    throw new Error(error);
  }

  return filterGistsFields(data);
};

/**
 * Query a gist file raw data from given url
 * @param {String} url file url
 */
export const getGistFileRaw = async url => {
  const [error, data] = await awaitTo(axios.get(url));

  if (error) {
    // TODO: Improve and Extend error handling
    return '';
  }

  return data;
};
