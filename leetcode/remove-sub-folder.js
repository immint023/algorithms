/**
 * @param {string[]} folder
 * @return {string[]}
 * Input: folder = ["/a","/a/b","/c/d","/c/d/e","/c/f"]
 * Output: ["/a","/c/d","/c/f"]
 * Explanation: Folders "/a/b/" is a subfolder of "/a" and "/c/d/e" is inside of folder "/c/d" in our filesystem.
 */
var removeSubfolders = function(folder) {
  const result = [];
  const folderLength = folder.length;
    
  let parentFolder = folder[0];
  folder = folder.sort();

  for (let i = 0; i < folderLength; ++i) {
    if (!folder[i].startsWith(parentFolder)) {
      parentFolder = folder[i];
      result.push(folder[i]);
    } else {
      if (folder[i].split('/').length === parentFolder.split('/').length) {
        result.push(folder[i]);
      }
    }
  }

  return result;
};
