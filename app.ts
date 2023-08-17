/* Запрос */
// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted"
// }
/* Ответ */
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]

enum QuestionStatus {
    Published = 'published',
    Draft = 'Draft',
    Deleted = 'Deleted'
}

// Промис не стал дописывать
async function getFaqs(req:{topicId: number, status: QuestionStatus}):Promise<{question: string}> {
	const res = await fetch('/faqs', {
		method: 'POST',
		body: JSON.stringify(req)
	});
	const data = await res.json();
	return data;
}