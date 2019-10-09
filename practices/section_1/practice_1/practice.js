function collect_same_elements(collection_a, collection_b) {
    let getSimilarCollection = collection_a.filter(m => collection_b.includes(m))
    return getSimilarCollection;
}

module.exports = collect_same_elements;
