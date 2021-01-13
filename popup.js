const getContent = (data) => {
  return data;
}

document.addEventListener('DOMContentLoaded', () => {
  const titleBox = document.getElementById('title');

  const query = { active: true, currentWindow: true };

  chrome.tabs.query(query, (tabs) => {
    titleBox.innerHTML = getContent(tabs[0].title);
  });
});

