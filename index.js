const Table = (props) => {
  return (
    <table className="table">
      <thead> 
        <TableHeader headers={props.headers} />
      </thead>
      <tbody>
        <TableRows rows={props.data} values={props.values} />
      </tbody>
    </table>
  )
}

const TableHeader = (props) => {
  return props.headers.map((e, i) => {
    return <th>{e}</th>
  })
}

const TableRows = (props) => {
  return props.rows.map((e, i) => { 
    return (
      <tr key={i}>  
        <TableCells row={e} values={props.values} />
      </tr>
    )
  })
}

const TableCells = (props) => {
  return props.values.map((v, i) => {
    return (
      <td>
        { i === 0 ? 
          <a href={props.row['url']} target="_blank">{ props.row[v] }</a> 
          : props.row[v] }
      </td>
    )
  })
}

class App extends React.Component {
   constructor() {
     super();
     this.state = {
      items: []
     }
   }
  
  componentDidMount() {
    this.fetchGoogleSheet ();
  }
  
  fetchGoogleSheet = () => {
    // api key restricted to domain/directory
    const apiKey = 'AIzaSyBFpZregfOoRFucibyPYyp-Vu9RkiR8NQc';
    const cellRange = '!A2:Z3000'
    const url = `https://sheets.googleapis.com/v4/spreadsheets/1KxEK0jt7wcaIn4A22_zas5Za8I-l-429dKaZgtICeVk/values/data${cellRange}?key=${apiKey}`;
    fetch(url)
    .then(resp => resp.json())
    .then((data) => {
      const results = [];
      data.values.map((val, i) => {
        let obj = {
           title: val[0],
           issuingOffice: val[1],
           category: val[2],
           url: val[3]
        }
        results.push(obj);
      });
      this.setState({
        items: [...this.state.items, ...results]
      });
    })
    .catch(error => {
      console.log('There was an error fetching your request.')
    });
  }
 
  render() {
    return (
      <div>
        <a className="view-gs" href="https://docs.google.com/spreadsheets/d/1KxEK0jt7wcaIn4A22_zas5Za8I-l-429dKaZgtICeVk/edit?usp=sharing" target="_blank">View Google Sheet</a>
        <Table 
          headers={['Title', 'Issuing Office', 'Category']} 
          data={this.state.items}
          values={['title', 'issuingOffice', 'category']}
         />
      </div>
    )
  }
}
      
ReactDOM.render(<App/>, document.getElementById('root'));

