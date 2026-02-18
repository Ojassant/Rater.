document.addEventListener('DOMContentLoaded', () => {
	const btn = document.getElementById('calcAvgBtn');
	const result = document.getElementById('averageResult');

	function calculateAverage() {
		const inputs = Array.from(document.querySelectorAll('input[type="number"]'));
		const numbers = inputs
			.map(i => i.value.trim())
			.filter(v => v !== '')
			.map(Number)
			.filter(n => !isNaN(n));

		if (numbers.length === 0) {
			result.textContent = 'No numbers';
			return;
		}

		const sum = numbers.reduce((a, b) => a + b, 0);
		const avg = sum / numbers.length;
		result.textContent = avg.toFixed(2);
	}

	if (btn) btn.addEventListener('click', calculateAverage);
});
