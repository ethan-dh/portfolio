// Fonction pour gérer les tabs
function initTabs() {
  const tabsContainers = document.querySelectorAll('[data-slot="tabs"]');

  tabsContainers.forEach(container => {
    const triggers = container.querySelectorAll('[data-slot="tabs-trigger"]');
    const contents = container.querySelectorAll('[data-slot="tabs-content"]');

    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        const targetValue = trigger.getAttribute('data-value');

        // Supprimer la classe active de tous les triggers
        triggers.forEach(t => {
          t.classList.remove('active');
          t.removeAttribute('data-state');
        });

        // Ajouter la classe active au trigger cliqué
        trigger.classList.add('active');
        trigger.setAttribute('data-state', 'active');

        // Masquer tous les contenus
        contents.forEach(content => {
          content.classList.remove('active');
        });

        // Afficher le contenu correspondant
        const targetContent = container.querySelector(`[data-slot="tabs-content"][data-value="${targetValue}"]`);
        if (targetContent) {
          targetContent.classList.add('active');
        }
      });
    });
  });
}

// Initialiser les tabs au chargement de la page
document.addEventListener('DOMContentLoaded', initTabs);
