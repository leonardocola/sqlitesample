package com.example.trabalhosqlite;

import androidx.appcompat.app.AppCompatActivity;

import android.app.ListActivity;
import android.content.Intent;
import android.os.Bundle;
import android.view.View;
import android.widget.Button;
import android.widget.ListAdapter;
import android.widget.ListView;
import android.widget.SimpleAdapter;
import android.widget.TextView;
import android.widget.Toast;

import com.example.trabalhosqlite.dao.LivroDao;
import com.example.trabalhosqlite.model.Livro;

import java.util.ArrayList;
import java.util.HashMap;

public class MainActivity extends ListActivity implements View.OnClickListener {
    Button btnAdd, btnGetAll;
    TextView student_Id;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        btnAdd = findViewById(R.id.btnAdd);
        btnAdd.setOnClickListener(this);
        btnGetAll = findViewById(R.id.btnGetAll);
        btnGetAll.setOnClickListener(this);
    }

    @Override
    public void onClick(View view) {
        if (view == findViewById(R.id.btnAdd)) {
            Intent intent = new Intent(this, LivroDetail.class);
            intent.putExtra("student_Id", 0);
            startActivity(intent);
        } else {
            LivroDao dao = new LivroDao(this);
            ArrayList<HashMap<String, String>> livrolista = dao.getLivroList();
            ListView lv = getListView();
            if (livrolista.size() != 0) {
                lv.setOnItemClickListener((parent, view1, position, id) -> {
                    student_Id = (TextView) view1.findViewById(R.id.student_Id);
                    String studentId = student_Id.getText().toString();
                    Intent objIndent = new Intent(getApplicationContext(), LivroDetail.class);
                    objIndent.putExtra("student_Id", Integer.parseInt(studentId));
                    startActivity(objIndent);
                });
                ListAdapter adapter = new SimpleAdapter(MainActivity.this,
                        livrolista, R.layout.activity_view_livro_entry,
                        new String[]{"id", "name"},
                        new int[]{R.id.student_Id, R.id.student_name});
                setListAdapter(adapter);
            } else {
                Toast.makeText(this, "Nenhum Livbro!", Toast.LENGTH_SHORT).show();
            }
        }
    }
}