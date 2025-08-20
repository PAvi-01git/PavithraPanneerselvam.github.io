// Sidebar Toggle
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("closed");
}

// Skills Doughnut Chart
new Chart(document.getElementById("skillsChart"), {
  type: "doughnut",
  data: {
    labels: ["Analytics", "Project Mgmt", "Agile/Scrum", "Digital Marketing", "Programming"],
    datasets: [{
      data: [30, 25, 20, 15, 10],
      backgroundColor: ["#22d3ee", "#f59e0b", "#34d399", "#a78bfa", "#60a5fa"]
    }]
  },
  options: {
    cutout: "55%",
    plugins: { legend: { position: "bottom" } }
  }
});

// LeetCode Submissions Growth
new Chart(document.getElementById("leetcodeChart"), {
  type: "line",
  data: {
    labels: ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7","Day 8","Day 9","Day 10"],
    datasets: [{
      label: "Submissions",
      data: [12, 28, 45, 70, 95, 120, 160, 190, 220, 249],
      borderColor: "#f59e0b",
      fill: false,
      tension: 0.3
    }]
  },
  options: {
    plugins: { legend: { display: false } },
    scales: { y: { beginAtZero: true } }
  }
});
