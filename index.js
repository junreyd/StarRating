 var round_off_points = Math.round(itmembers_list_result[i].Points * 5) / 100;
                let output = [];

                for (a = round_off_points; a >= 1; a--)
                    output.push('<i class="fa fa-star" aria-hidden="true" style="color: gold;"></i>&nbsp;');

                if (a % 1 != 0) output.push('<i class="fa fa-star-half-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');

                for (let e = (5 - round_off_points); e >= 1; e--)
                    output.push('<i class="fa fa-star-o" aria-hidden="true" style="color: gold;"></i>&nbsp;');
                    
                    
                    $("#table_id").append(`<span id=stars>${output.join('  ')}</span>
`);
