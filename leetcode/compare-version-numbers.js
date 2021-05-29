/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */

 var compareVersion = function(version1, version2) {
  const firstRevisions = version1.split('.');
  const secondRevisions = version2.split('.');

  const firstRevisionsLength = firstRevisions.length;
  const secondRevisionsLength = secondRevisions.length;

  for (let i = 0; i < firstRevisionsLength || i < secondRevisionsLength; i++) {
      const num1 = parseInt(firstRevisions[i]) || 0;
      const num2 = parseInt(secondRevisions[i]) || 0;
      if (num1 < num2) {
          return -1;
      }
      if (num1 > num2) {
          return 1;
      }
  }

  return 0;
};