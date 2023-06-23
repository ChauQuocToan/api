import React, { useEffect, useState } from 'react'
import SelectBox from './SelectBox'
import categoryApi from '../../../api/categoryApi'
export default function SelectCategory(props) {
    const defaultValue = props.defaultValue
    const [data, setData] = useState([])
    const handleFunction = props.handleFunction
    useEffect(() => {
        const fetchCategory = async () => {
            const response = await categoryApi.getAll()
            var categories = (response.map((category) => {
                return {
                    label: category.cat_name,
                    value: category.id,
                    parent_id: category.parent_id,
                    type: category.type,
                    key: category.id
                }
            }))
            var allType0 = categories.filter((cat) => {
                return cat.type == 0
            })
            var allType1 = categories.filter((cat) => {
                return cat.type == 1
            })
            var allType2 = categories.filter((cat) => {
                return cat.type == 2
            })
            var dataTemp = [];
            allType0.forEach((cat0) => {
                dataTemp.push(cat0)
                var cat0Children = allType1.filter((cat1) => {
                    return cat1.parent_id == cat0.value
                })
                cat0Children.forEach((cat1) => {
                    cat1.label = '--' + cat1.label
                    dataTemp.push(cat1)
                    var cat1Children = allType2.filter((cat2) => {
                        return cat2.parent_id == cat1.value
                    })
                    cat1Children.forEach((cat2) => {
                        cat2.label = '------' + cat2.label
                        dataTemp.push(cat2)

                    })
                })
            })
            setData(dataTemp)
        }
        fetchCategory()

    }, [])
    return (
        <SelectBox name='cat_id' data={data} defaultValue={defaultValue} handleFunction={handleFunction} />
    )
}
