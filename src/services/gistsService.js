/**
 * Formats a Gist object from given data
 *
 * @param {Array[Object]} data data to be truncated
 */
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
